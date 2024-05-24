import {
  Container,
  ImgWrapper,
  SocialMedias,
  TextWrapper,
  TextWrapperBackground
} from './styles'
import Banner from '../../assets/Banner.png'
import Marquee from 'react-fast-marquee'
import instagram from '../../assets/instagram-fill.png'
import whatsapp from '../../assets/whatsapp.png'

interface MainBannerProps {
  diaNumero: string
  diaEscrito: string
}
export default function MainBanner({ diaNumero, diaEscrito }: MainBannerProps) {
  return (
    <Container>
      <img src={Banner} alt="" />
      <SocialMedias>
        <ImgWrapper>
          <a href="https://www.instagram.com/acififoz/">
            <img src={whatsapp} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </ImgWrapper>
      </SocialMedias>
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
