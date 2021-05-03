import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { generateSoringSteps } from "./sortingAlgorithms";
import { Graph } from "./components/Graph";
import { Bar, PlaySpeedConfig, SortingAlgorithm } from "./types";
import { shuffleArray } from "./utilities";
import { PlayerControl } from "./components/PlayerControl";
import { playSpeedConfigs } from "./constants";

const Container = styled.div`
  padding: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const generateRandomGraphData = () =>
  shuffleArray(
    Array(100)
      .fill(0)
      .map((_, index) => ({
        value: index + 1,
      }))
  );

const App = () => {
  const [graphData, setGraphData] = useState<Bar[]>(generateRandomGraphData());
  const [graphDataSteps, setGraphDataSteps] = useState<Bar[][]>([graphData]);
  const [graphDataStep, setGraphDataStep] = useState<number>(0);
  const [sortingAlgorithm, setSortingAlgorithm] = useState<SortingAlgorithm>(
    "Merge"
  );

  const [playSpeedConfig, setPlaySpeedConfig] = useState<PlaySpeedConfig>(
    playSpeedConfigs[0]
  );

  const [playTimeout, setPlayTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setGraphDataSteps(generateSoringSteps(graphData, sortingAlgorithm));
    setGraphDataStep(0);
  }, [graphData, sortingAlgorithm]);

  const moveGraphDataStep = (stepSize: number) => {
    setGraphDataStep((currentGraphDataStep) => {
      let newGraphDataStep = currentGraphDataStep + stepSize;
      if (newGraphDataStep < 0) newGraphDataStep = 0;
      if (newGraphDataStep > graphDataSteps.length - 1)
        newGraphDataStep = graphDataSteps.length - 1;

      return newGraphDataStep;
    });
  };

  const handleRandom = () => {
    setGraphData(generateRandomGraphData());
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
    if (graphDataStep === graphDataSteps.length - 1) {
      setPlayTimeout((currentPlayTimeout) => {
        if (currentPlayTimeout) {
          clearTimeout(currentPlayTimeout);
          return null;
        }

        return currentPlayTimeout;
      });
    }
  }, [graphDataStep, graphDataSteps.length]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGraphDataStep(parseInt(event.target.value));
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
    <Container>
      <Graph data={graphDataSteps[graphDataStep]} />
      <PlayerControl
        playSpeedConfig={playSpeedConfig}
        sortingAlgorithm={sortingAlgorithm}
        isPlaying={Boolean(playTimeout)}
        graphDataStep={graphDataStep}
        graphDataStepsLength={graphDataSteps.length}
        onPrevious={handlePrevious}
        onPause={handlePause}
        onPlay={handlePlay}
        onNext={handleNext}
        onRandom={handleRandom}
        onSliderChange={handleSliderChange}
        onSelectAlgorithm={handleSelectAlgorithm}
        onSelectPlaySpeed={handleSelectPlaySpeed}
      />
    </Container>
  );
};

export default App;
