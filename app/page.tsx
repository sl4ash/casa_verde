"use client";
import Head from "next/head";
import styled from "styled-components";
import { Newsletter, Menu, HorizontalCard, Ofertas } from "./_components";
import Vector from "@/public/Vector.svg";
import Image from "next/image";

const Main = styled.main`
  background-color: #fcfcfc;
  background-size: 92px 92px;
  background-image: repeating-linear-gradient(
      to right,
      #7979791a,
      #7979791a 1px,
      #fcfcfc1a 1px,
      #fcfcfc1a
    ),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' opacity='0.4' filter='url(%23a)'/%3E%3C/svg%3E");
    > * {
      position: relative;
      z-index: 2;
    }
    overflow: hidden;
    `;

const VectorWrapper = styled.div`
  position: relative;
  > img {
    display: block;
    position: absolute;
    top: -50px;
    right: -50px;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>7 Days of React</title>
        <meta
          name="description"
          content="Projeto Criado para o desafio 7 Days Of React."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Main>
        <VectorWrapper>
          <Image src={Vector} alt="" aria-hidden="true" draggable="false"/>
        </VectorWrapper>
        <Menu />
        <Newsletter />
        <HorizontalCard />
        <Ofertas />
      </Main>
    </>
  );
}
