import styled from "styled-components";

export const BoxPerfil = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 15px;
`;
export const Button = styled.button`
  background: 0;
  border: none;
  color: #0000ff;
  cursor: pointer;

  &[data-seguir="true"] {
    color: #353535;
  }
`;
export const Imagen = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 30px;
`;
export const NomePerfil = styled.h5`
  margin-bottom: 0;
  margin-top: 2px;
  font-weight: 500;
  font-size: 14px;
`;
export const Seguidor = styled.p`
  margin-top: 0;
  font-size: 14px;
  color: #969696;
  font-weight: 400;
`;
