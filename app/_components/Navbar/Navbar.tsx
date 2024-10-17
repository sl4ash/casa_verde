import React from "react";
import { Wrapper, NavLink } from "./styled"

function Navbar() {
  const pages: string[] = [
    "Como fazer",
    "Ofertas",
    "Depoimentos",
    "Videos",
    "Meu carrinho",
  ];

  return (
    <Wrapper>
      {pages.map((value, index) => (
        
        <NavLink key={index} href="" onClick={(e)=> e.preventDefault()}>{value}</NavLink>
      ))}
    </Wrapper>
  );
}

export default Navbar;
