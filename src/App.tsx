import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { PlayerControl } from "./components/PlayerControl";
import { Visualizer } from "./components/Visualizer";

import { Bar, PlaySpeedConfig, SortingAlgorithm } from "./types";
import { generateSoringSteps } from "./sortingAlgorithms";
import { playSpeedConfigs, sortingAlgorithms } from "./constants";
import { shuffleArray } from "./utilities";
import { IsPlayingContext } from "./contexts/IsPlayingContext";

const Container = styled.div`
  flex-direction: column;
  padding: 0.5rem;
  display: flex;
  height: 100%;
`;

const generateRandomGraphData = () =>
  shuffleArray(
    Array(100)
      .fill(0)
      .map((_, index) => ({
        value: index + 1,
      }))
  );

type AllSortingSteps = {
  [key in SortingAlgorithm]?: Bar[][];
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
  const [sortingAlgorithm, setSortingAlgorithm] = useState<SortingAlgorithm>(
    "Merge"
  );

  const [playSpeedConfig, setPlaySpeedConfig] = useState<PlaySpeedConfig>(
    playSpeedConfigs[0]
  );

  const [playTimeout, setPlayTimeout] = useState<NodeJS.Timeout | null>(null);

  const sortingSteps = allSortingSteps?.[sortingAlgorithm] || [dataToSort];

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

  useEffect(() => {
    setCurrentSortStep(0);
  }, [dataToSort, sortingAlgorithm]);

  const moveGraphDataStep = (stepSize: number) => {
    setCurrentSortStep((currentGraphDataStep) => {
      let newGraphDataStep = currentGraphDataStep + stepSize;
      if (newGraphDataStep < 0) newGraphDataStep = 0;
      if (newGraphDataStep > sortingSteps.length - 1)
        newGraphDataStep = sortingSteps.length - 1;

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
    if (currentStep === sortingSteps.length - 1) {
      setPlayTimeout((currentPlayTimeout) => {
        if (currentPlayTimeout) {
          clearTimeout(currentPlayTimeout);
          return null;
        }

        return currentPlayTimeout;
      });
    }
  }, [currentStep, sortingSteps.length]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSortStep(parseInt(event.target.value));
  };

  const handleSelectAlgorithm = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortingAlgorithm(event.target.value as SortingAlgorithm);
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
        <Visualizer
          sortingAlgorithm={sortingAlgorithm}
          onSelectAlgorithm={handleSelectAlgorithm}
          sortingSteps={sortingSteps}
          currentStep={currentStep}
        />

        <PlayerControl
          currentStep={currentStep}
          playSpeedConfig={playSpeedConfig}
          totalSteps={sortingSteps.length}
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
