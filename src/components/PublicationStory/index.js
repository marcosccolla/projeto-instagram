import React from "react";
import { IoIosMore } from "react-icons/io";
import { Header, Image, Imagem, Cabe, BoxCard } from "./style";
import { PostComment } from "../PostComment/index";

export const PublicationStory = (props) => {
  return (
    <BoxCard>
      <Header>
        <Cabe>
          <Image src={props.iconPerfil} />
          <h5>{props.nomePerfil} </h5>
        </Cabe>
        <IoIosMore />
      </Header>
      <Imagem src={props.imagemPrincipal} />
      <PostComment
        nomePerfil={props.nomePerfil}
        totalCurtidas={props.totalCurtidas}
      />
    </BoxCard>
  );
};
