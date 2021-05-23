import React, { useEffect, useMemo, useState } from "react";

import { IsPlayingContext } from "./contexts/IsPlayingContext";
import { PlayerControl } from "./components/PlayerControl";
import { Visualizer } from "./components/Visualizer";

import {
  Bar,
  AllSortingSteps,
  PlaySpeedConfig,
  SortingAlgorithm,
  VisualizerCount,
  ArraySizeConfig,
  ArrayVariation,
} from "./types";

import {
  arraySizeConfigs,
  playSpeedConfigs,
  sortingAlgorithms,
  visualizerCountConfigs,
} from "./constants";

import { generateSoringSteps } from "./sortingAlgorithms";
import { generateRandomGraphData } from "./utilities";
import { Container, Main, VisualizersGrid } from "./styles";
import { Header } from "./components/Header/Header";

const App: React.FC = () => {
  const [dataToSort, setDataToSort] = useState<Bar[]>([{ value: 100 }]);

  const [allSortingSteps, setAllSortingSteps] =
    useState<AllSortingSteps | null>(null);

  const [currentStep, setCurrentSortStep] = useState<number>(0);

  const [activeAlgorithms, setActiveAlgorithms] = useState<SortingAlgorithm[]>([
    "Merge",
  ]);

  const [playSpeedConfig, setPlaySpeedConfig] = useState<PlaySpeedConfig>(
    playSpeedConfigs[0]
  );

  const [playTimeout, setPlayTimeout] = useState<NodeJS.Timeout | null>(null);

  const [arraySizeConfig, setArraySizeConfig] = useState<ArraySizeConfig>(
    arraySizeConfigs[0]
  );

  const [arrayVariation, setArrayVariation] =
    useState<ArrayVariation>("Unique");

  const totalSteps: number = useMemo(() => {
    let maxLength: number = 1;
    if (allSortingSteps) {
      activeAlgorithms.forEach((activeAlgorithm: SortingAlgorithm) => {
        maxLength = Math.max(
          allSortingSteps[activeAlgorithm]?.length || 1,
          maxLength
        );
      });
    }
    return maxLength;
  }, [allSortingSteps, activeAlgorithms]);

  useEffect(() => {
    setDataToSort(
      generateRandomGraphData(arraySizeConfig.actualSize, arrayVariation)
    );
  }, [arraySizeConfig, arrayVariation]);

  useEffect(() => {
    const newAllSortingSteps: any = {};
    sortingAlgorithms.forEach((algorithm: SortingAlgorithm) => {
      newAllSortingSteps[algorithm] = generateSoringSteps(
        dataToSort,
        algorithm
      );
    });

    setAllSortingSteps(newAllSortingSteps as AllSortingSteps);
    setCurrentSortStep(0);
  }, [dataToSort]);

  useEffect(() => {
    if (currentStep === totalSteps - 1) {
      setPlayTimeout((currentPlayTimeout) => {
        if (currentPlayTimeout) {
          clearTimeout(currentPlayTimeout);
          return null;
        }

        return currentPlayTimeout;
      });
    }
  }, [currentStep, totalSteps]);

  const changeVisualizerCount = (newCount: number) => {
    setActiveAlgorithms((currentActiveAlgorithms) => {
      if (newCount === 1) {
        return [currentActiveAlgorithms[0]];
      } else if (newCount === 2) {
        return [
          currentActiveAlgorithms[0],
          currentActiveAlgorithms[1] || "Merge",
        ];
      } else if (newCount === 4) {
        return [
          currentActiveAlgorithms[0],
          currentActiveAlgorithms[1] || "Merge",
          currentActiveAlgorithms[2] || "Merge",
          currentActiveAlgorithms[4] || "Merge",
        ];
      }

      return currentActiveAlgorithms;
    });
  };

  const moveGraphDataStep = (stepSize: number) => {
    setCurrentSortStep((currentGraphDataStep) => {
      let newGraphDataStep = currentGraphDataStep + stepSize;
      if (newGraphDataStep < 0) newGraphDataStep = 0;
      if (newGraphDataStep > totalSteps - 1) newGraphDataStep = totalSteps - 1;

      return newGraphDataStep;
    });
  };

  const handleRandom = () => {
    setDataToSort(
      generateRandomGraphData(arraySizeConfig.actualSize, arrayVariation)
    );
  };

  const handlePrevious = () => {
    moveGraphDataStep(-1);
  };

  const handleNext = () => {
    moveGraphDataStep(1);
  };

  const handlePlay = () => {
    if (!playTimeout) {
      setPlayTimeout(
        setInterval(
          () => moveGraphDataStep(playSpeedConfig.playStepSize),
          playSpeedConfig.playStepIntervalMS
        )
      );
    }
  };

  const handlePause = () => {
    if (playTimeout) {
      clearInterval(playTimeout);
      setPlayTimeout(null);
    }
  };

  const handleReset = () => {
    handlePause();
    setCurrentSortStep(0);
  };

  const handleChangeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSortStep(parseInt(event.target.value));
  };

  const handleChangePlaySpeed = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newPlaySpeedConfig = playSpeedConfigs.find(
      (config) => config.playSpeed === parseInt(event.target.value)
    );

    if (newPlaySpeedConfig) {
      setPlaySpeedConfig(newPlaySpeedConfig);
    }
  };

  const handleChangeAlgorithm =
    (visualizerIndex: number) => (sortingAlgorithm: SortingAlgorithm) => {
      setActiveAlgorithms((currentActiveAlgorithms) => {
        const stateCopy = [...currentActiveAlgorithms];
        stateCopy[visualizerIndex] = sortingAlgorithm;
        return stateCopy;
      });
    };

  const handleChangeVisualizerCount = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newVisualizerCount: number | undefined = visualizerCountConfigs.find(
      (config) => config === parseInt(event.target.value)
    );

    if (newVisualizerCount) {
      changeVisualizerCount(newVisualizerCount);
    }
  };

  const handleChangeArraySizeConfig = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newArraySizeConfig = arraySizeConfigs.find(
      (config) => config.arraySize === event.target.value
    );

    if (newArraySizeConfig) {
      setArraySizeConfig(newArraySizeConfig);
    }
  };

  const handleChangeArrayVariation = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setArrayVariation(event.target.value as ArrayVariation);
  };

  return (
    <IsPlayingContext.Provider value={Boolean(playTimeout)}>
      <Container>
        <Header
          arraySizeConfig={arraySizeConfig}
          arrayVariation={arrayVariation}
          visualizerCount={activeAlgorithms.length as VisualizerCount}
          playSpeedConfig={playSpeedConfig}
          onReset={handleReset}
          onRandom={handleRandom}
          onChangePlaySpeed={handleChangePlaySpeed}
          onChangeVisualizerCount={handleChangeVisualizerCount}
          onChangeArraySize={handleChangeArraySizeConfig}
          onChangeArrayVariation={handleChangeArrayVariation}
        />

        <Main>
          <VisualizersGrid
            visualizerCount={activeAlgorithms.length as VisualizerCount}
          >
            {activeAlgorithms.map((activeAlgorithm, index: number) => (
              <Visualizer
                sortingAlgorithm={activeAlgorithm}
                onSelectAlgorithm={handleChangeAlgorithm(index)}
                sortingSteps={
                  allSortingSteps?.[activeAlgorithm] || [dataToSort]
                }
                currentStep={currentStep}
              />
            ))}
          </VisualizersGrid>
          <PlayerControl
            currentStep={currentStep}
            totalSteps={totalSteps}
            onPrevious={handlePrevious}
            onPause={handlePause}
            onPlay={handlePlay}
            onNext={handleNext}
            onChangeSlider={handleChangeSlider}
          />
        </Main>
      </Container>
    </IsPlayingContext.Provider>
  );
};

export default App;
