import React from 'react'
import { Container, TextWrapper, TextWrapperBackground } from './styles'
import Banner from '../../assets/Banner.png'
import Marquee from 'react-fast-marquee'

interface MainBannerProps {
  diaNumero: string
  diaEscrito: string
}
export default function MainBanner({ diaNumero, diaEscrito }: MainBannerProps) {
  return (
    <Container>
      <img src={Banner} alt="" />
      <TextWrapperBackground>
        <Marquee pauseOnClick>
          <TextWrapper>
            <p>PROXIMO SUKIYAKI DIA {diaNumero}</p>
            <p>PROXIMO SUKIYAKI DIA {diaEscrito}</p>
            <p>PROXIMO SUKIYAKI DIA {diaEscrito}</p>
            <p>PROXIMO SUKIYAKI DIA {diaEscrito}</p>
            <p>PROXIMO SUKIYAKI DIA {diaEscrito}</p>
            <p>PROXIMO SUKIYAKI DIA {diaEscrito}</p>
            <p>PROXIMO SUKIYAKI DIA {diaEscrito}</p>
            <p>PROXIMO SUKIYAKI DIA {diaEscrito}</p>
            <p>PROXIMO SUKIYAKI DIA {diaEscrito}</p>
            <p>PROXIMO SUKIYAKI DIA {diaEscrito}</p>
          </TextWrapper>
        </Marquee>
      </TextWrapperBackground>
    </Container>
  )
}
