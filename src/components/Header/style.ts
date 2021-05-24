import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  margin-top: -8px;
  margin-left: 4px;
  margin-bottom: 0;
`;

export const HeaderControlsContainer = styled.div`
  border-bottom: 1px solid #555;
  border-top: 1px solid #555;
  padding: 8px 0;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const Space = styled.div`
  flex: 1 0 auto;
`;
