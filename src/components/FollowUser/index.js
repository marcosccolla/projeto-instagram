import React, { useState } from "react";
import { BoxPerfil, Imagen, NomePerfil, Seguidor, Button } from "./styled";

export const FollowUser = (props) => {
  const [seguir, setSeguir] = useState(false);

  const seguirUsuario = () => {
    setSeguir(!seguir);
  };

  return (
    <BoxPerfil>
      <Imagen src={props.imagem} />
      <div>
        <NomePerfil>{props.titulo} </NomePerfil>
        <Seguidor>{props.subtitulo}</Seguidor>
      </div>
      <Button data-seguir={seguir} onClick={seguirUsuario}>
        {seguir ? "Seguindo" : "Seguir"}
      </Button>
    </BoxPerfil>
  );
};
