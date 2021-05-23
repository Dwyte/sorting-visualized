import styled from "styled-components";

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

export const AlgorithmOption = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#222" : "#111")};
  width: ${({ isActive }) => (isActive ? "108px" : "initial")};
  padding: 8px 10px;
  border-radius: 0;
  cursor: pointer;
  color: white;
  border: 0;

  :hover {
    background-color: #333;
  }
`;
