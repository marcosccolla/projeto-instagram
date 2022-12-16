import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { HiOutlineBookmark } from "react-icons/hi";
import { GrEmoji } from "react-icons/gr";
import {
  Icons,
  Svg,
  Coment,
  InputComments,
  BoxComments,
  Button,
} from "./style";

export const BannerComentarios = (props) => {
  const [values, setValues] = useState("");

  return (
    <div>
      <Icons>
        <Svg>
          <AiOutlineHeart />
          <TbMessageCircle2 />
          <FiSend />
        </Svg>
        <HiOutlineBookmark />
      </Icons>
      <Coment>{props.totalCurtidas} curtidas</Coment>
      <Coment>{props.nomePerfil} </Coment>
      <BoxComments>
        <InputComments
          placeholder="Adicione aqui o seu comentario..."
          value={values}
          onChange={(evento) => {
            setValues(evento.target.value);
          }}
        />
        <div>
          {values && <Button>Publicar</Button>} <GrEmoji />
        </div>
      </BoxComments>
    </div>
  );
};
