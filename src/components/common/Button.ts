import styled, { css } from "styled-components";

interface ButtonProps {
  isActive?: boolean;
  padding?: "regular" | "large";
  isIconLarge?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 0.8rem;
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
    color: #888;
  }

  background-color: ${({ isActive = true }) => (isActive ? "#222" : "#111")};
  color: ${({ isActive = true }) => (isActive ? "#fff" : "#ccc")};
  padding: ${({ padding = "regular" }) =>
    padding === "regular" ? "0.5rem" : "0.75rem"};

  ${({ isIconLarge = false }) =>
    isIconLarge &&
    css`
      i {
        display: block;
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
      }
    `}
`;

export const ButtonFlexGroup = styled.div`
  display: flex;
  gap: 0.25rem;
  button {
    flex: 1;
  }
`;
