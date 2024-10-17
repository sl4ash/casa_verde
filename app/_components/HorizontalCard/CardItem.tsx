import React from "react";
import styled from "styled-components";

import { CardItemWrapper, Bullet, Item } from './styled';

interface CardItemProps {
    text: string;
}

const CardItem: React.FC<CardItemProps> = ({ text }) => {
    return (
        <CardItemWrapper>
            <Bullet />
            <Item>{text}</Item>
        </CardItemWrapper>
    );
};

export default CardItem;
