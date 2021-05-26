import styled from "styled-components";
import { Button } from "../common/Button";

export const Container = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const StepButton = styled(Button)`
  padding: 0.5rem 1.5rem;
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
    height: 100%;
    width: 20px;

    :hover {
      background: orange;
    }
  }

  // for chrome and safari
  ::-webkit-slider-runnable-track {
    height: 100%;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: white;
    height: 100%;
    width: 20px;

    :hover {
      background: orange;
    }
  }
`;
