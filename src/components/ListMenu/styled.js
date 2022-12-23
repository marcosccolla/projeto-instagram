import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  gap: 20px;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  width: 220px;
  height: 48px;
  align-items: center;

  svg {
    height: 24px;
    width: 24px;
  }

  @media (max-width: 1263px) {
    width: auto;
  }
`;

export const ImagemPerfil = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 20px;
`;

export const Titulo = styled.p`
  font-size: 16px;

  @media (max-width: 1263px) {
    display: none;
  }
`;
