import React from "react";
import { ImagemIcon, Storie, Subtitu, BoxImg } from "./style";

export const ListaStorie = (props) => {
  return (
    <Storie>
      <BoxImg>
        <ImagemIcon src={props.image} />
      </BoxImg>
      <Subtitu>{props.titulo}</Subtitu>
    </Storie>
  );
};
