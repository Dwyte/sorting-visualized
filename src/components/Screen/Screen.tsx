import { Bar, SortingAlgorithm } from "../../types";
import { Graph } from "../Graph";
import { AlgorithmSelection } from "./AlgorithmSelection";
import { Container } from "./style";

interface Props {
  isPlaying: boolean;
  graphData: Bar[];
  sortingAlgorithm: SortingAlgorithm;
  onSelectAlgorithm: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Screen: React.FC<Props> = ({
  isPlaying,
  graphData,
  sortingAlgorithm,
  onSelectAlgorithm,
}) => {
  return (
    <Container>
      <AlgorithmSelection
        activeAlgorithm={sortingAlgorithm}
        onChange={onSelectAlgorithm}
        disabled={isPlaying}
      />

      <Graph data={graphData} />
    </Container>
  );
};
