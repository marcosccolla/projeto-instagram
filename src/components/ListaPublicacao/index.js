import React from "react";
import { PublicacaoItem } from "../PublicacaoItem";

const listaPublicacaoData = [
  {
    iconPerfil: "/imagem/rocketseat.png",
    nomePerfil: "Rocketseat",
    imagemPrincipal: "/imagem/rocketseat.jpg",
    totalCurtidas: "298",
  },
  {
    iconPerfil:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHv2rI8JxwT9g/company-logo_200_200/0/1625141188918?e=2147483647&v=beta&t=i__rK5WyUr9ONa-EtB7aGMFC86s9Mma2JoClRSEC6Ig",
    nomePerfil: "Ambev tech",
    imagemPrincipal: "/imagem/copaAmbev.jpg",
    totalCurtidas: "500",
  },
];

export const ListaPublicacao = () => {
  return (
    <>
      {listaPublicacaoData.map((item) => (
        <PublicacaoItem
          key={item.nomePerfil}
          iconPerfil={item.iconPerfil}
          nomePerfil={item.nomePerfil}
          imagemPrincipal={item.imagemPrincipal}
          totalCurtidas={item.totalCurtidas}
        />
      ))}
    </>
  );
};
