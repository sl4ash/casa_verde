import styled from "styled-components";
import ImagemCard from '@/public/imagem-card.png'

const CardItemWrapper = styled.li`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const Item = styled.p`
    font-family: inherit;
    color: rgb(123, 123, 123);
    font-size: 20px;
    margin: 0;
`;

const Bullet = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: rgb(255, 203, 71);
`;

const Wrapper = styled.div`
    display: flex;
    margin: 4rem auto;
    width: 50%;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    background-color: white;
    height: fit-content;
`

const CardImage = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    background: url(${ImagemCard.src});
    background-position: top;
    background-size: 100%;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    width: 40%;
    height: fit-content;
`

const CardLeading = styled.h4`
    margin: 8px 0 0;
    font-family: inherit;
    font-weight: 400;
    color: rgb(123, 123, 123);
    font-size: 18px;
`

const CardDisplay = styled.h3`
    font-family: var(--font-elsieswashcaps-black);
    font-size: 42px;
    margin: 8px 0;
`

const CardList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
`

export { CardItemWrapper, Item, Bullet, Wrapper, CardImage, TextWrapper, CardLeading, CardDisplay, CardList }