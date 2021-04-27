import { Graph } from "./components/Graph";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem;
  height: 100%;
`;

const App = () => {
  const graphData = Array(100)
    .fill(0)
    .map(() => Math.round(Math.max(Math.random(), 0.01) * 100))
    .sort((a, b) => a - b);

  return (
    <Container>
      <Graph data={graphData} />
    </Container>
  );
};

export default App;
