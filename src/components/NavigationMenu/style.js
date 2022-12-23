import styled from "styled-components";

export const BoxNavecao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 25px;
  border-right: 1px solid #ccc;
  padding: 16px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1263px) {
    margin-left: 0;
    padding: 24px;
  }
`;
export const ImagemLogo = styled.img`
  max-width: 180px;
  height: 100px;

  @media (max-width: 1263px) {
    display: none;
  }
`;

export const ImagemLogos = styled.div`
  svg {
    width: 24px;
    height: 24px;
    margin: 30px 0;
  }

  @media (min-width: 1264px) {
    display: none;
  }
`;
