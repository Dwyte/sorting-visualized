import styled from "styled-components";

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ isActive }) => (isActive ? "#222" : "#111")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#ccc")};
  padding: 8px 20px;
  cursor: pointer;
  margin: 0;
  border: 0;

  :hover {
    background-color: #333;
    color: white;
  }
`;

export const ButtonFlexGroup = styled.div`
  display: flex;
  gap: 4px;
  button {
    flex: 1;
  }
`;
