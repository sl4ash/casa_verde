import React from 'react'
import CardItem from './CardItem'
import { Wrapper, TextWrapper, CardLeading, CardImage, CardDisplay, CardList} from './styled';

function HorizontalCard() {
  return (
    <Wrapper>
        <CardImage />
        <TextWrapper>
            <CardLeading>Como conseguir</CardLeading>
            <CardDisplay>minha planta</CardDisplay>
            <CardList>
                <CardItem text="Escolha suas plantas"></CardItem>
                <CardItem text="Faça seu pedido"></CardItem>
                <CardItem text="Aguarde na sua casa"></CardItem>
            </CardList>
        </TextWrapper>
    </Wrapper>
  )
}

export default HorizontalCard