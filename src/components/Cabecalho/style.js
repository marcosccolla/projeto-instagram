import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px;

  @media (min-width: 769px) {
    display: none;
    width: 80%;
  }
`;
export const BoxInput = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  svg {
    font-size: 23px;
  }
`;
export const Input = styled.input`
  background: #efefef;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  height: 35px;
`;
export const Imagem = styled.img`
  width: 103px;
  height: 29px;
`;
