import styled from "styled-components";

export const Box = styled.div`
  margin-top: 40px;
  margin-right: 100px;
  width: 310px;
  @media (max-width: 999px) {
    display: none;
    margin-top: 0px;
    margin-right: 0px;
    width: 0px;
  }
`;
export const BoxPerfil = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 15px;
`;
export const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 30px;
`;
export const Perfil = styled.h4`
  margin-bottom: 0;
`;
export const Nome = styled.p`
  margin-top: 0;
`;
export const Button = styled.button`
  background: 0;
  border: none;
  color: #0000ff;
  cursor: pointer;

  &[data-seguir="true"] {
    color: #ccc;
  }
`;
export const Boxsug = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Sug = styled.p`
  color: #969696;
  font-weight: 500;
`;
