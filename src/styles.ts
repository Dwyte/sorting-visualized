import styled from "styled-components";
import { VisualizerCount } from "./types";

export const Container = styled.div`
  flex-direction: column;
  padding: 0.5rem;
  display: flex;
  height: 100%;
`;

export const VisualizersGrid = styled.div<{ visualizerCount: VisualizerCount }>`
  grid-gap: 0.25rem;
  display: grid;
  height: 100%;

  grid-template-columns: ${({ visualizerCount }) =>
    visualizerCount >= 2 ? "1fr 1fr" : "1fr"};

  grid-template-rows: ${({ visualizerCount }) =>
    visualizerCount === 4 ? "1fr 1fr" : "1fr"};
`;
