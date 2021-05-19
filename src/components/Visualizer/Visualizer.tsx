import { useContext } from "react";

import { AlgorithmSelection } from "./AlgorithmSelection";
import { Graph } from "../Graph";

import { IsPlayingContext } from "../../contexts/IsPlayingContext";
import { Bar, SortingAlgorithm } from "../../types";
import { Container } from "./style";

interface Props {
  graphData: Bar[];
  sortingAlgorithm: SortingAlgorithm;
  onSelectAlgorithm: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Visualizer: React.FC<Props> = ({
  graphData,
  sortingAlgorithm,
  onSelectAlgorithm,
}) => {
  const isPlaying: boolean = useContext(IsPlayingContext);

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
