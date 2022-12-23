import React from "react";
import { NavigationMenu } from "../../components/NavigationMenu";
import { Story } from "../../components/Story";
import { PostProfile } from "../../components/PostProfile";
import { ListPublication } from "../../components/ListPublication";

import { Body, ColunaPrincipal, BoxScroll } from "./styled";
import { Header } from "./../../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Body>
        <NavigationMenu />
        <BoxScroll>
          <ColunaPrincipal>
            <Story />
            <ListPublication />
          </ColunaPrincipal>
          <PostProfile />
        </BoxScroll>
      </Body>
    </>
  );
};
