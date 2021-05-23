import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
    height: 24px;
    width: 14px;
  }

  // for chrome and safari
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: white;
    height: 24px;
    width: 14px;
  }
`;
