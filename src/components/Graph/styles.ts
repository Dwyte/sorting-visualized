import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`;

export const BarItem = styled.div<{ value: number; color?: string }>`
  background-color: ${({ color }) => color || "white"};
  height: ${({ value }) => value}%;
  flex: 1;

  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;
