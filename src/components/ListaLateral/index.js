import React from "react";
import { Link, ImagemPerfil, Titulo } from "./styled";

export const ListaLateral = (props) => {
  return (
    <Link href="/">
      {props.icon}
      {props.image && <ImagemPerfil src={props.image} />}
      <Titulo> {props.titulo}</Titulo>
    </Link>
  );
};
