import React from 'react'
import { Container, TextWrapper } from './styles'
import Banner from '../../assets/Banner.png'
interface MainBannerProps {
  diaNumero: string
  diaEscrito: string
}
export default function MainBanner({ diaNumero, diaEscrito }: MainBannerProps) {
  return (
    <Container>
      <img src={Banner} alt="" />
      <TextWrapper>
        <p>
          PROXIMO SUKIYAKI DIA {diaNumero} PROXIMO SUKIYAKI DIA {diaEscrito}{' '}
          PROXIMO SUKIYAKI DIA {diaNumero} PROXIMO SUKIYAKI DIA {diaEscrito}
          PROXIMO SUKIYAKI DIA {diaNumero} PROXIMO SUKIYAKI DIA {diaEscrito}{' '}
          PROXIMO SUKIYAKI DIA {diaNumero} PROXIMO SUKIYAKI DIA {diaEscrito}
          PROXIMO SUKIYAKI DIA {diaNumero} PROXIMO SUKIYAKI DIA {diaEscrito}{' '}
          PROXIMO SUKIYAKI DIA {diaNumero} PROXIMO SUKIYAKI DIA {diaEscrito}
        </p>
      </TextWrapper>
    </Container>
  )
}
