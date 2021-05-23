import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 4px;
`;

export const StepButton = styled.button`
  background-color: #222;
  padding: 8px 24px;
  border-radius: 0;
  cursor: pointer;
  border: none;
  color: white;

  :hover {
    background-color: #333;
  }
`;

export const StepProgress = styled.input`
  background-color: #222;
  appearance: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  flex: 1;

  // for firefox
  ::-moz-range-thumb {
    -moz-appearance: none;
    border-radius: 0;
    border: none;
    height: 32px;
    width: 20px;
  }

  // for chrome and safari
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: white;
    height: 32px;
    width: 20px;
  }
`;
