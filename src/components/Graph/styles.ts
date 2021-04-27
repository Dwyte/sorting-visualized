import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #eee;
  align-items: flex-end;
  padding: 0.5rem;
  display: flex;
  height: 100%;
`;

export const Bar = styled.div<{ value: number }>`
  height: ${({ value }) => value}%;
  background: #fff;
  margin: 0 2px;
  flex: 1;
`;
