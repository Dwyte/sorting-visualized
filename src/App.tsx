import { useEffect, useState } from "react";
import styled from "styled-components";

import { generateSoringSteps } from "./sortingAlgorithms";
import { Graph } from "./components/Graph";
import { Bar } from "./types";

const Container = styled.div`
  padding: 0.5rem;
  height: 100%;
`;

const App = () => {
  const [graphData, setGraphData] = useState<Bar[]>(
    Array(100)
      .fill(0)
      .map((_, index) => ({
        id: index,
        value: Math.round(Math.max(Math.random(), 0.01) * 100),
      }))
  );

  const [graphDataSteps, setGraphDataSteps] = useState<Bar[][]>([graphData]);
  const [graphDataStep, setGraphDataStep] = useState<number>(0);

  useEffect(() => {
    setGraphDataSteps(generateSoringSteps(graphData));
  }, [graphData]);

  const playSorting = () => {
    setGraphDataStep((currentGraphDataStep) => {
      if (currentGraphDataStep < graphDataSteps.length - 1) {
        return currentGraphDataStep + 1;
      }

      return currentGraphDataStep;
    });
  };

  return (
    <Container>
      <button onClick={() => setInterval(playSorting, 100)}>Start</button>
      <Graph data={graphDataSteps[graphDataStep]} />
    </Container>
  );
};

export default App;
