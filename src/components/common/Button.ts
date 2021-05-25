import styled, { css } from "styled-components";

interface ButtonProps {
  isActive?: boolean;
  padding?: "regular" | "large";
  isIconLarge?: boolean;
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  margin: 0;
  border: 0;

  :hover:not(:disabled) {
    background-color: #333;
    color: white;
  }

  :disabled {
    background: #111;
    cursor: initial;
    color: #aaa;
  }

  background-color: ${({ isActive = true }) => (isActive ? "#222" : "#111")};
  color: ${({ isActive = true }) => (isActive ? "#fff" : "#ccc")};
  padding: ${({ padding = "regular" }) =>
    padding === "regular" ? "8px" : "12px"};

  ${({ isIconLarge = false }) =>
    isIconLarge &&
    css`
      i {
        display: block;
        font-size: 20px;
        margin-bottom: 4px;
      }
    `}
`;

export const ButtonFlexGroup = styled.div`
  display: flex;
  gap: 4px;
  button {
    flex: 1;
  }
`;
