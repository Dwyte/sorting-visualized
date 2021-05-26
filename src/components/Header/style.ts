import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TitleH1 = styled.h1`
  font-family: "Raleway";
  font-weight: 800;
  font-size: 3.25rem;
  font-style: italic;
  margin: 0;

  @media screen and (min-width: 1600px) {
    font-size: 4rem;
  }
`;

export const SubtitleH2 = styled.h2`
  font-family: "Roboto Mono";
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  margin-top: -0.25rem;
  margin-left: 0.25rem;
  margin-bottom: 0;

  @media screen and (min-width: 1600px) {
    font-size: 1rem;
  }
`;

export const HeaderControlsContainer = styled.div`
  border-bottom: 1px solid #555;
  border-top: 1px solid #555;
  padding: 0.5rem 0;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Space = styled.div`
  flex: 1 0 auto;
`;
