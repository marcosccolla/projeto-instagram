import React from "react";
import { BannerStore, BoxScroll } from "./style";
import { ListStory } from "../ListStory";

const Icons = [
  {
    image: "../../../imagem/spot.jpg",
    titulo: "Spotify",
  },
  {
    image: "../../../imagem/alura2.jpg",
    titulo: "Alura",
  },
  {
    image: "../../../imagem/youtube3.jpg",
    titulo: "Youtube",
  },
  {
    image: "../../../imagem/netflix2.png",
    titulo: "Netflix",
  },
  {
    image: "../../../imagem/rocketseat.png",
    titulo: "Rocketseat",
  },
  {
    image: "../../../imagem/google5.jpg",
    titulo: "Google",
  },
];

export const Story = () => {
  return (
    <BoxScroll>
      <BannerStore>
        {Icons.map((item) => (
          <ListStory
            key={item.titulo}
            image={item.image}
            titulo={item.titulo}
          />
        ))}
      </BannerStore>
    </BoxScroll>
  );
};
