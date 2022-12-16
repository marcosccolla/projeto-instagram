import styled from "styled-components";

export const ImagemIcon = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 30px;
`;

export const BoxImg = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  border: 2px solid #fff;
  border-radius: 100%;

  &::before {
    content: "' '";
    background: rgb(211, 0, 197);
    background: linear-gradient(
      241deg,
      rgba(211, 0, 197, 1) 0%,
      rgba(255, 191, 0, 1) 100%
    );
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    padding: 5px;
  }
`;

export const Storie = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 440px) {
    width: 80%;
  }
`;

export const Subtitu = styled.p`
  font-size: 12px;
  margin: 0;
  text-align: center;
`;
