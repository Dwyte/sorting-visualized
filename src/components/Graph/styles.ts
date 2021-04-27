import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #eee;
  align-items: flex-end;
  padding: 0.5rem;
  display: flex;
  height: 100%;
`;

export const BarItem = styled.div<{ value: number; color?: string }>`
  background-color: ${({ color }) => color || "white"};
  height: ${({ value }) => value}%;
  margin: 0 2px;
  flex: 1;
`;
