import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { generateSoringSteps } from "./sortingAlgorithms";
import { Graph } from "./components/Graph";
import { Bar, SortingAlgorithm } from "./types";
import { shuffleArray } from "./utilities";
import { PlayerControl } from "./components/PlayerControl";

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

  const [playTimeout, setPlayTimeout] = useState<NodeJS.Timeout | null>(null);

  const [sortingAlgorithm, setSortingAlgorithm] = useState<SortingAlgorithm>(
    "Merge"
  );

  useEffect(() => {
    setGraphDataSteps(generateSoringSteps(graphData, sortingAlgorithm));
    setGraphDataStep(0);
  }, [graphData, sortingAlgorithm]);

  const handlePrevious = () => {
    setGraphDataStep((currentGraphDataStep) => {
      if (currentGraphDataStep > 0) {
        return currentGraphDataStep - 1;
      }

      return currentGraphDataStep;
    });
  };

  const handleRandom = () => {
    setGraphData(generateRandomGraphData());
  };

  const handleNext = () => {
    setGraphDataStep((currentGraphDataStep) => {
      if (currentGraphDataStep < graphDataSteps.length - 1) {
        return currentGraphDataStep + 1;
      }
      return currentGraphDataStep;
    });
  };

  const handlePlay = () => {
    if (!playTimeout) {
      setPlayTimeout(setInterval(handleNext, 1));
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

  const handleSortingAlgorithmChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortingAlgorithm(event.target.value as SortingAlgorithm);
  };

  return (
    <Container>
      <Graph data={graphDataSteps[graphDataStep]} />
      <PlayerControl
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
        onSelectAlgorithm={handleSortingAlgorithmChange}
      />
    </Container>
  );
};

export default App;
