import Marquee from 'react-fast-marquee'
import Banner from '../../assets/Banner.png'
import instagram from '../../assets/instagram-fill.png'
import whatsapp from '../../assets/whatsapp.png'
import {
  Container,
  ImgWrapper,
  SocialMedias,
  TextWrapper,
  TextWrapperBackground,
  WidthAligner
} from './styles'

interface MainBannerProps {
  diaNumero: string
  diaEscrito: string
}
export default function MainBanner({ diaNumero, diaEscrito }: MainBannerProps) {
  const encodedText = encodeURIComponent('Gostaria de falar sobre a ACEFI. ')
  const whatsappLink = `https://wa.me/5545998294308?text=${encodedText}`
  return (
    <Container>
      <img src={Banner} alt="" />
      <WidthAligner>
        <SocialMedias>
          <ImgWrapper>
            <a target="_blank" href={whatsappLink}>
              <img src={whatsapp} alt="" className="whatsapp-icon" />
            </a>
            <a target="_blank" href="https://www.instagram.com/acefifoz/">
              <img src={instagram} alt="" className="instagram-icon" />
            </a>
          </ImgWrapper>
        </SocialMedias>
      </WidthAligner>
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
