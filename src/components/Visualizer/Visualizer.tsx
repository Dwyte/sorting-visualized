import { useContext } from "react";

import { AlgorithmSelection } from "./AlgorithmSelection";
import { Graph } from "../Graph";

import { IsPlayingContext } from "../../contexts/IsPlayingContext";
import { Bar, SortingAlgorithm } from "../../types";
import { Container, GraphContainer } from "./style";

interface Props {
  sortingAlgorithm: SortingAlgorithm;
  onSelectAlgorithm: (sortingAlgorithm: SortingAlgorithm) => void;
  sortingSteps: Bar[][];
  currentStep: number;
}

export const Visualizer: React.FC<Props> = ({
  sortingSteps,
  currentStep,
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

      <GraphContainer>
        <Graph
          data={sortingSteps[Math.min(currentStep, sortingSteps.length - 1)]}
        />
      </GraphContainer>
    </Container>
  );
};
