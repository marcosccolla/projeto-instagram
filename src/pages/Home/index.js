import React from "react";
import { BannerLeft } from "../../components/Bannerleft";
import { BannerStories } from "../../components/BannerStories";
import { ColunaDireita } from "../../components/ColunaDireita";
import { ListaPublicacao } from "./../../components/ListaPublicacao";

import { Body, ColunaPrincipal, BoxScroll } from "./styled";
import { Cabecalho } from "./../../components/Cabecalho/index";

export const Home = () => {
  return (
    <>
      <Cabecalho />
      <Body>
        <BannerLeft />
        <BoxScroll>
          <ColunaPrincipal>
            <BannerStories />
            <ListaPublicacao />
          </ColunaPrincipal>
          <ColunaDireita />
        </BoxScroll>
      </Body>
    </>
  );
};
