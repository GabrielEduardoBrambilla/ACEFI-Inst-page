import Marquee from 'react-fast-marquee'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Banner from '../../assets/Banner.png'
import Banner1 from '../../assets/gallery/1.png'
import Banner2 from '../../assets/gallery/2.png'
import Banner3 from '../../assets/gallery/3.png'
import Banner4 from '../../assets/gallery/4.png'
import Banner5 from '../../assets/gallery/5.png'
import Batchan from '../../assets/gallery/batchan.png'
import instagram from '../../assets/instagram-fill.png'
import whatsapp from '../../assets/whatsapp.png'
import { CONTACTS, STRINGS_PT } from '../../constants'
import {
  Container,
  ImgWrapper,
  SlideImage,
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
  const encodedText = encodeURIComponent(STRINGS_PT.banner.whatsappMessage)
  const whatsappLink = `https://wa.me/${CONTACTS.whatsapp.phoneNumber}?text=${encodedText}`

  // You can add more banner images here
  const bannerImages = [
    Batchan,
    Banner,
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Banner5
  ]

  return (
    <Container>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        loop={bannerImages.length > 1}
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideImage src={image} alt={`Banner ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <WidthAligner>
        <SocialMedias>
          <ImgWrapper>
            <a target="_blank" href={whatsappLink}>
              <img src={whatsapp} alt="" className="whatsapp-icon" />
            </a>
            <a target="_blank" href={CONTACTS.socialMedia.instagram}>
              <img src={instagram} alt="" className="instagram-icon" />
            </a>
          </ImgWrapper>
        </SocialMedias>
      </WidthAligner>
      <TextWrapperBackground>
        <Marquee pauseOnClick>
          <TextWrapper>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaNumero}
            </p>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaEscrito}
            </p>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaEscrito}
            </p>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaEscrito}
            </p>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaEscrito}
            </p>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaEscrito}
            </p>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaEscrito}
            </p>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaEscrito}
            </p>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaEscrito}
            </p>
            <p>
              {STRINGS_PT.banner.nextSukiyaki} {diaEscrito}
            </p>
          </TextWrapper>
        </Marquee>
      </TextWrapperBackground>
    </Container>
  )
}
