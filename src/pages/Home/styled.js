import styled from "styled-components";

export const Body = styled.div`
  height: 100vh;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export const ColunaPrincipal = styled.div`
  margin-right: 32px;
  @media (max-width: 999px) {
    width: 472px;
    margin: 0 auto;
  }
  @media (max-width: 472px) {
    width: 100%;
  }
`;
export const BoxScroll = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100%;
  overflow: auto;
  margin-left: 80px;
  @media (max-width: 999px) {
    margin-left: 0px;
    width: 100vw;
  }
  @media (max-width: 440px) {
    margin-left: 0px;
    width: 100%;
  }
`;
