import { Container, ImgWrapper, TextWrapper } from './styles'

interface ContentSectionProps {
  titulo: string
  textoPrincipal: string
  image: string
}
export default function ContentSection({
  image,
  textoPrincipal,
  titulo
}: ContentSectionProps) {
  return (
    <Container>
      <TextWrapper>
        <h2>{titulo}</h2>
        <p>{textoPrincipal}</p>
      </TextWrapper>
      <ImgWrapper>
        <img src={image} alt="" />
      </ImgWrapper>
    </Container>
  )
}
