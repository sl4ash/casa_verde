import { MdArrowForward } from "react-icons/md";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 0 auto 4rem;
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: center;
`;

const OfertasLeading = styled.h3`
    font-family: inherit;
    font-weight: 600;
    font-size: 22px;
    margin: 8px 0;
    color: rgb(123, 123, 123);
`;

const OfertasDisplay = styled.h2`
    font-family: var(--font-elsieswashcaps-black);
    font-size: 84px;
    margin: 0;
`;

const OfertasGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    width: 100%;
`;

const OfertasItem = styled.div<{ src: string }>`
    position: relative;
    text-align: start;
    display: flex;
    width: 100%;
    height: 100%;
    background: white;
    &::before {
        position: absolute;
        content: "";
        width: 55%;
        height: 100%;
        background-image: url(${(props) => props.src});
        background-size: cover;
        background-position: top 20% left;
    }
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
`;

const PlantImgHolder = styled.div`
    background: transparent;
    width: 50%;
    background-size: cover;
    background-overflow: visible;
`;

const PlantText = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 2;
    flex: 1;
`;

const PlantDisplay = styled.h4`
    margin: 0;
    font-family: var(--font-elsieswashcaps-black);
    font-size: 32px;
`;

const PlantPrice = styled.h3`
    margin: 0;
    font-family: inherit;
    color: rgb(123, 123, 123);
    font-weight: 500;
`;

const BuyWrapper = styled.a`
    margin-top: 16px;
    display: flex;
    gap: 16px;
    align-items: center;
`

const BuyText = styled.p`
    margin: 0;
    color: rgb(255, 203, 71);
    font-family: inherit;
    font-size: 20px;
    font-weight: 500;
`

const BuyArrow = styled(MdArrowForward)`
    color: rgb(255, 203, 71);
    font-size: 20px;
`

export { Wrapper, OfertasLeading, OfertasDisplay, OfertasGrid, OfertasItem, PlantImgHolder, PlantText, PlantDisplay, PlantPrice, BuyWrapper, BuyText, BuyArrow }