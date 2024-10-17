import Image from 'next/image'
import React from 'react'
import LogoSvg from '@/public/logo-svg.svg';
import { Wrapper } from './styled';

function Logo() {
  return (
    <Wrapper>
        <Image src={LogoSvg} alt="Logo Casa Verde"/>
    </Wrapper>
  )
}

export default Logo