import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media (min-width: 380px) {
    width: 90%;
  }
  /* @media (max-width: 470px) {
    width: 80%;
  } */
`;

export const Cabe = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const Image = styled.img`
  margin: 20px 10px 10px 0;
  width: 36px;
  height: 36px;
  border-radius: 30px;
  border: 2px solid #fff;
`;
export const Imagem = styled.img`
  width: 100%;
`;
export const BoxCard = styled.div`
  margin-bottom: 24px;
`;
