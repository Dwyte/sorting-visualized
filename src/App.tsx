import { useEffect, useState } from "react";
import styled from "styled-components";

import { generateSoringSteps } from "./sortingAlgorithms";
import { Graph } from "./components/Graph";
import { Bar } from "./types";

const Container = styled.div`
  padding: 0.5rem;
  height: 100%;
`;

const generateRandomGraphData = () =>
  Array(50)
    .fill(0)
    .map((_, index) => ({
      id: index,
      value: Math.round(Math.max(Math.random(), 0.01) * 100),
    }));

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
      setPlayTimeout(setInterval(handleNext, 10));
    }
  };

  const handlePause = () => {
    if (playTimeout) {
      clearInterval(playTimeout);
      setPlayTimeout(null);
    }
  };

  return (
    <Container>
      <button onClick={handleRandom} disabled={Boolean(playTimeout)}>
        Random
      </button>
      <button onClick={handlePrevious} disabled={Boolean(playTimeout)}>
        {"<"}
      </button>
      {playTimeout && <button onClick={handlePause}>Pause</button>}
      {!playTimeout && <button onClick={handlePlay}>Play</button>}
      <button onClick={handleNext} disabled={Boolean(playTimeout)}>
        {">"}
      </button>
      <button disabled>{graphDataStep}</button>

      <Graph data={graphDataSteps[graphDataStep]} />
    </Container>
  );
};

export default App;
