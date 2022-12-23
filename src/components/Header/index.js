import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Imagem, Box, BoxInput, Input } from "./style";

export const Header = () => {
  const [values, setValues] = useState("");
  return (
    <Box>
      <Imagem src="../imagem/instagram-Logo.png" alt="logo" />
      <BoxInput>
        <Input
          type="text"
          placeholder="Pesquisar"
          value={values}
          onChange={(evento) => {
            setValues(evento.target.value);
          }}
        />
        <AiOutlineHeart />
      </BoxInput>
    </Box>
  );
};
