import styled from "styled-components";
import { VisualizerCount } from "./types";

export const Container = styled.div`
  grid-template-columns: 1fr 4fr;
  padding: 4rem 7rem;
  display: grid;
  height: 100%;
`;

export const Main = styled.main`
  flex-direction: column;
  display: flex;
  gap: 0.25rem;
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
