import React from "react";
import { plants } from "@/lib/plants";
import {
    Wrapper,
    OfertasLeading,
    OfertasDisplay,
    OfertasGrid,
    OfertasItem,
    PlantImgHolder,
    PlantText,
    PlantDisplay,
    PlantPrice,
} from "./styled";
import PlantBuy from "./components/PlantBuy";

function Ofertas() {
    return (
        <Wrapper>
            <OfertasLeading>Conheça nossas</OfertasLeading>
            <OfertasDisplay>ofertas</OfertasDisplay>
            <OfertasGrid>
                {plants.map((value, index) => (
                    <OfertasItem key={index} src={value.image}>
                        <PlantImgHolder />
                        <PlantText>
                            <PlantDisplay>{value.name}</PlantDisplay>
                            <PlantPrice>{`R$ ${value.price},00`}</PlantPrice>
                            <PlantBuy />
                        </PlantText>
                    </OfertasItem>
                ))}
            </OfertasGrid>
        </Wrapper>
    );
}

export default Ofertas;
