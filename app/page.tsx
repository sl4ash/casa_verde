"use client";
import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "./_components/sharedstyles";
import Cards from "./_components/cards";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>app/page.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
    </Container>
  );
}
