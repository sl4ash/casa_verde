import Image from "next/image";
import React from "react";
import ImagemHero from "@/public/imagem-hero-1.png";
import { NewsletterInput } from "..";
import { Wrapper, HeroColumn, HeroLeading, HeroDisplay, HeroLead, HeroImageWrapper } from "./styled";

function Newsletter() {
  return (
    <Wrapper>
      <HeroColumn>
        <HeroLeading>Sua casa com as</HeroLeading>
        <HeroDisplay>melhores plantas</HeroDisplay>
        <HeroLead>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </HeroLead>
        <NewsletterInput />
      </HeroColumn>
      <HeroImageWrapper>
        <Image
          src={ImagemHero}
          alt=""
          aria-hidden="true"
          draggable="false"
        ></Image>
      </HeroImageWrapper>
    </Wrapper>
  );
}

export default Newsletter;
