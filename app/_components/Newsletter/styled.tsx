import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 67.5%;
`;

const HeroColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 50%;
`;

const HeroLeading = styled.h3`
  color: rgb(124, 124, 124);
  font-weight: 400;
  margin: 0;
  font-size: 20px;
`;

const HeroDisplay = styled.h2`
  font-family: var(--font-elsieswashcaps-black);
  font-size: 80px;
  margin: 0;
`;

const HeroLead = styled.p`
  font-size: 16px;
  color: rgb(124, 124, 124);
  width: 80%;
  font-weight: 400;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 50%;
  > img {
    width: 80%;
    height: auto;
    position: absolute;
    transform: translate(-50px, -100px);
  }
`;

export { Wrapper, HeroColumn, HeroLeading, HeroDisplay, HeroLead, HeroImageWrapper }