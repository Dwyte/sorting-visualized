import React, { useEffect, useMemo, useReducer, useState } from "react";
import styled from "styled-components";

import { PlayerControl } from "./components/PlayerControl";
import { Visualizer } from "./components/Visualizer";

import { Bar, PlaySpeedConfig, SortingAlgorithm } from "./types";
import { generateSoringSteps } from "./sortingAlgorithms";
import { playSpeedConfigs, sortingAlgorithms } from "./constants";
import { generateRandomGraphData } from "./utilities";
import { IsPlayingContext } from "./contexts/IsPlayingContext";

const Container = styled.div`
  flex-direction: column;
  padding: 0.5rem;
  display: flex;
  height: 100%;
`;

type AllSortingSteps = {
  [key in SortingAlgorithm]?: Bar[][];
};

interface ReducerActions {
  type: "change-algorithm";
  payload: any;
}

const reducer = (state: SortingAlgorithm[], action: ReducerActions) => {
  switch (action.type) {
    case "change-algorithm":
      const stateCopy = [...state];
      stateCopy[action.payload.index] = action.payload.algorithm;
      return stateCopy;
    default:
      return state;
  }
};

const App = () => {
  const [dataToSort, setDataToSort] = useState<Bar[]>(
    generateRandomGraphData()
  );

  const [
    allSortingSteps,
    setAllSortingSteps,
  ] = useState<AllSortingSteps | null>(null);

  const [currentStep, setCurrentSortStep] = useState<number>(0);

  const [activeAlgorithms, dispatch] = useReducer(reducer, [
    "Merge",
    "Selection",
  ]);

  const [playSpeedConfig, setPlaySpeedConfig] = useState<PlaySpeedConfig>(
    playSpeedConfigs[0]
  );

  const [playTimeout, setPlayTimeout] = useState<NodeJS.Timeout | null>(null);

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
    const newAllSortingSteps: AllSortingSteps = {};
    sortingAlgorithms.forEach((algorithm: SortingAlgorithm) => {
      newAllSortingSteps[algorithm] = generateSoringSteps(
        dataToSort,
        algorithm
      );
    });

    setAllSortingSteps(newAllSortingSteps);
  }, [dataToSort]);

  const moveGraphDataStep = (stepSize: number) => {
    setCurrentSortStep((currentGraphDataStep) => {
      let newGraphDataStep = currentGraphDataStep + stepSize;
      if (newGraphDataStep < 0) newGraphDataStep = 0;
      if (newGraphDataStep > totalSteps - 1) newGraphDataStep = totalSteps - 1;

      return newGraphDataStep;
    });
  };

  const handleRandom = () => {
    setDataToSort(generateRandomGraphData());
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

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSortStep(parseInt(event.target.value));
  };

  const handleSelectPlaySpeed = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newPlaySpeedConfig = playSpeedConfigs.find(
      (config) => config.playSpeed === parseInt(event.target.value)
    );

    if (newPlaySpeedConfig) {
      setPlaySpeedConfig(newPlaySpeedConfig);
    }
  };

  return (
    <IsPlayingContext.Provider value={Boolean(playTimeout)}>
      <Container>
        {activeAlgorithms.map((activeAlgorithm, index: number) => (
          <Visualizer
            sortingAlgorithm={activeAlgorithm}
            onSelectAlgorithm={(event: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch({
                type: "change-algorithm",
                payload: { index, algorithm: event.target.value },
              })
            }
            sortingSteps={allSortingSteps?.[activeAlgorithm] || [dataToSort]}
            currentStep={currentStep}
          />
        ))}

        <PlayerControl
          currentStep={currentStep}
          playSpeedConfig={playSpeedConfig}
          totalSteps={totalSteps}
          onPrevious={handlePrevious}
          onPause={handlePause}
          onPlay={handlePlay}
          onNext={handleNext}
          onRandom={handleRandom}
          onSliderChange={handleSliderChange}
          onSelectPlaySpeed={handleSelectPlaySpeed}
        />
      </Container>
    </IsPlayingContext.Provider>
  );
};

export default App;
