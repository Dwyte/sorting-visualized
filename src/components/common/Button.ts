import styled from "styled-components";

interface ButtonProps {
  isActive: boolean;
  padding?: "regular" | "large";
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ isActive }) => (isActive ? "#222" : "#111")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#ccc")};
  padding: ${({ padding = "regular" }) =>
    padding === "regular" ? "8px 20px" : "12px 24px"};
  cursor: pointer;
  margin: 0;
  border: 0;

  :hover {
    background-color: #333;
    color: white;
  }

  i {
    display: block;
    font-size: 20px;
    margin-bottom: 4px;
  }
`;

export const ButtonFlexGroup = styled.div`
  display: flex;
  gap: 4px;
  button {
    flex: 1;
  }
`;
