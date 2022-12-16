import React from "react";

import { BsFillHouseDoorFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { MenuNavecao, ImagemLogo, ImagemLogos } from "./style";
import {
  AiOutlineHeart,
  AiOutlinePlusSquare,
  AiOutlineMenu,
} from "react-icons/ai";
import { ListaLateral } from "../ListaLateral";
import { SlSocialInstagram } from "react-icons/sl";

const Data = [
  {
    icon: <BsFillHouseDoorFill />,
    titulo: "Página iniciar",
    image: null,
  },
  {
    icon: <GoSearch />,
    titulo: "Pesquisa",
    image: null,
  },
  {
    icon: <MdOutlineExplore />,
    titulo: "Explorar",
    image: null,
  },
  {
    icon: <RiMessengerLine />,
    titulo: "Mensagens",
    image: null,
  },
  {
    icon: <AiOutlineHeart />,
    titulo: "Notificações",
    image: null,
  },
  {
    icon: <AiOutlinePlusSquare />,
    titulo: "Criar",
    image: null,
  },
  {
    icon: null,
    titulo: "Perfil",
    image: "../../imagem/perfil.jpeg",
  },
  {
    icon: <AiOutlineMenu />,
    titulo: "Mais",
    image: null,
  },
];

export const BannerLeft = () => {
  return (
    <MenuNavecao>
      <ImagemLogo src="../../imagem/instagram-logo.png" />
      <ImagemLogos>
        <SlSocialInstagram />
      </ImagemLogos>

      {Data.map((item) => (
        <ListaLateral
          key={item.titulo}
          icon={item.icon}
          titulo={item.titulo}
          image={item.image}
        />
      ))}
    </MenuNavecao>
  );
};
