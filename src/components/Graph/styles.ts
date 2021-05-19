import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const BarItem = styled.div<{ value: number; color?: string }>`
  background-color: ${({ color }) => color || "white"};
  height: ${({ value }) => value}%;
  margin: 0 1px;
  flex: 1;
`;
