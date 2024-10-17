import React from "react";
import { Navbar, Logo } from "..";
import { Wrapper, Header } from "./styled";

function Menu() {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <Navbar />
      </Header>
    </Wrapper>
  );
}

export default Menu;
