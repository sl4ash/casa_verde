import React from 'react'
import { BuyWrapper, BuyText, BuyArrow } from '../styled';

function PlantBuy() {
  return (
    <BuyWrapper href="" onClick={(e) => e.preventDefault()}>
        <BuyText>Comprar</BuyText>
        <BuyArrow />
    </BuyWrapper>
  )
}

export default PlantBuy