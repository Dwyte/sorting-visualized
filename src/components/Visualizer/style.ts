import styled from "styled-components";
import { Button } from "../common/Button";

export const Container = styled.div`
  border: 2px solid #222;
  display: flex;
  height: 100%;
  gap: 0.25rem;
  position: relative;
  flex-direction: column;
`;

export const GraphContainer = styled.div`
  padding: 0.25rem;
  flex: 1;
`;

export const AlgorithmSelect = styled.div`
  position: absolute;
  flex-direction: column;
  display: flex;
`;

export const AlgorithmOption = styled(Button)`
  width: ${({ $isActive }) => ($isActive ? "6.75rem" : "initial")};
`;
