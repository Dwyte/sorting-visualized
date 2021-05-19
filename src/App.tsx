import React, { useEffect, useMemo, useReducer, useState } from "react";
import styled from "styled-components";

import { PlayerControl } from "./components/PlayerControl";
import { Visualizer } from "./components/Visualizer";

import {
  Bar,
  PlaySpeedConfig,
  SortingAlgorithm,
  VisualizerCount,
} from "./types";
import { generateSoringSteps } from "./sortingAlgorithms";
import {
  playSpeedConfigs,
  sortingAlgorithms,
  visualizerCountConfigs,
} from "./constants";
import { generateRandomGraphData } from "./utilities";
import { IsPlayingContext } from "./contexts/IsPlayingContext";

const Container = styled.div`
  flex-direction: column;
  padding: 0.5rem;
  display: flex;
  height: 100%;
`;

const VisualizersGrid = styled.div<{ visualizerCount: VisualizerCount }>`
  grid-gap: 0.25rem;
  display: grid;
  height: 100%;

  grid-template-columns: ${({ visualizerCount }) =>
    visualizerCount >= 2 ? "1fr 1fr" : "1fr"};

  grid-template-rows: ${({ visualizerCount }) =>
    visualizerCount === 4 ? "1fr 1fr" : "1fr"};
`;

type AllSortingSteps = {
  [key in SortingAlgorithm]?: Bar[][];
};

interface ReducerActions {
  type: "change-algorithm" | "change-visualizer-count";
  payload: any;
}

const reducer = (state: SortingAlgorithm[], action: ReducerActions) => {
  switch (action.type) {
    case "change-algorithm":
      const stateCopy = [...state];
      stateCopy[action.payload.index] = action.payload.algorithm;
      return stateCopy;
    case "change-visualizer-count":
      if (action.payload === 1) {
        return [state[0]];
      } else if (action.payload === 2) {
        return [state[0], state[1] || "Merge"];
      } else if (action.payload === 4) {
        return [
          state[0],
          state[1] || "Merge",
          state[2] || "Merge",
          state[4] || "Merge",
        ];
      }
      return state;
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

  const [activeAlgorithms, dispatch] = useReducer(reducer, ["Merge"]);

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
    setCurrentSortStep(0);
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

  const handleChangeVisualizerCount = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newVisualizerCount: number | undefined = visualizerCountConfigs.find(
      (config) => config === parseInt(event.target.value)
    );

    if (newVisualizerCount) {
      dispatch({
        type: "change-visualizer-count",
        payload: newVisualizerCount,
      });
    }
  };

  return (
    <IsPlayingContext.Provider value={Boolean(playTimeout)}>
      <Container>
        <VisualizersGrid
          visualizerCount={activeAlgorithms.length as VisualizerCount}
        >
          {activeAlgorithms.map((activeAlgorithm, index: number) => (
            <Visualizer
              sortingAlgorithm={activeAlgorithm}
              onSelectAlgorithm={(
                event: React.ChangeEvent<HTMLSelectElement>
              ) =>
                dispatch({
                  type: "change-algorithm",
                  payload: { index, algorithm: event.target.value },
                })
              }
              sortingSteps={allSortingSteps?.[activeAlgorithm] || [dataToSort]}
              currentStep={currentStep}
            />
          ))}
        </VisualizersGrid>

        <PlayerControl
          currentStep={currentStep}
          playSpeedConfig={playSpeedConfig}
          totalSteps={totalSteps}
          visualizerCount={activeAlgorithms.length as VisualizerCount}
          onPrevious={handlePrevious}
          onPause={handlePause}
          onPlay={handlePlay}
          onNext={handleNext}
          onRandom={handleRandom}
          onChangeSlider={handleChangeSlider}
          onChangePlaySpeed={handleChangePlaySpeed}
          onChangeVisualizerCount={handleChangeVisualizerCount}
        />
      </Container>
    </IsPlayingContext.Provider>
  );
};

export default App;
