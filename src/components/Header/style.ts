import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

export const TitleH1 = styled.h1`
  font-family: "Raleway";
  font-weight: 800;
  font-size: 54px;
  font-style: italic;
  margin: 0;
`;

export const SubtitleH2 = styled.h2`
  font-family: "Roboto Mono";
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 2px;
  margin-top: -4px;
  margin-left: 4px;
`;

export const HeaderControlsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
