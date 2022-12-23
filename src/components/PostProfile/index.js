import React from "react";
import { FollowUser } from "../FollowUser";
import {
  Image,
  Box,
  BoxPerfil,
  Perfil,
  Nome,
  Button,
  Boxsug,
  Sug,
} from "./style";
const Data = [
  {
    id: 1,
    imagem: "/imagem/primo.jpg",
    titulo: "PrimoCast",
    subtitulo: "Seguido por Bruno Perine",
  },
  {
    id: 2,
    imagem: "/imagem/devclub.jpg",
    titulo: "DevClub",
    subtitulo: "Seguindo por Carol",
  },
  {
    id: 3,
    imagem: "/imagem/Dev.jpg",
    titulo: "DevMedia",
    subtitulo: "Seguida por Jessica",
  },
  {
    id: 4,
    imagem: "imagem/stone.png",
    titulo: "Stone",
    subtitulo: "Seguido por Marcelo ",
  },
  {
    id: 5,
    imagem: "imagem/totvs.png",
    titulo: "Totvs",
    subtitulo: "seguido por Andry",
  },
  {
    id: 6,
    imagem: "imagem/mercado.png",
    titulo: "Mercado Livre",
    subtitulo: "seguida por Mara",
  },
];
export const PostProfile = () => {
  return (
    <Box>
      <BoxPerfil>
        <Image src="/imagem/perfil.jpeg" />
        <div>
          <Perfil>marcoscolla.chiodi</Perfil>
          <Nome>Marcos colla</Nome>
        </div>
        <Button>Mudar</Button>
      </BoxPerfil>
      <Boxsug>
        <Sug>Susgestões para você</Sug>
        <Button>Ver tudo </Button>
      </Boxsug>
      {Data.map((item) => (
        <FollowUser
          key={item.id}
          imagem={item.imagem}
          titulo={item.titulo}
          subtitulo={item.subtitulo}
        />
      ))}
    </Box>
  );
};
