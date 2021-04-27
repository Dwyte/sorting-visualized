import { useEffect, useState } from "react";
import styled from "styled-components";

import { generateSoringSteps } from "./sortingAlgorithms";
import { Graph } from "./components/Graph";
import { Bar } from "./types";
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
        id: index,
        value: index + 1,
      }))
  );

const App = () => {
  const [graphData, setGraphData] = useState<Bar[]>(generateRandomGraphData());

  const [graphDataSteps, setGraphDataSteps] = useState<Bar[][]>([graphData]);
  const [graphDataStep, setGraphDataStep] = useState<number>(0);

  const [playTimeout, setPlayTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setGraphDataSteps(generateSoringSteps(graphData));
    setGraphDataStep(0);
  }, [graphData]);

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

  return (
    <Container>
      <Graph data={graphDataSteps[graphDataStep]} />
      <PlayerControl
        graphDataStep={graphDataStep}
        isPlaying={Boolean(playTimeout)}
        onPrevious={handlePrevious}
        onPause={handlePause}
        onPlay={handlePlay}
        onNext={handleNext}
        onRandom={handleRandom}
      />
    </Container>
  );
};

export default App;
