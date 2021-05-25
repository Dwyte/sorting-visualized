import styled from "styled-components";
import { Button } from "../common/Button";

export const Container = styled.div`
  border: 2px solid #222;
  display: flex;
  height: 100%;
  gap: 4px;
  position: relative;
  flex-direction: column;
`;

export const GraphContainer = styled.div`
  padding: 4px;
  flex: 1;
`;

export const AlgorithmSelect = styled.div`
  padding-bottom: 24px;
  padding-right: 24px;
  position: absolute;
  display: flex;
  left: -2px;
  top: -2px;
`;

export const AlgorithmOption = styled(Button)`
  width: ${({ isActive }) => (isActive ? "108px" : "initial")};
`;
