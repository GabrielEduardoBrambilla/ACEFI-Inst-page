import { Container, ImgWrapper, TextWrapper } from './styles'

interface ContentSectionProps {
  titulo: string
  textoPrincipal: string
  image: string
  id: string
  url?: string
  reverse?: boolean
}
export default function ContentSection({
  image,
  id,
  textoPrincipal,
  titulo,
  reverse,
  url
}: ContentSectionProps) {
  return (
    <Container reverse={reverse} id={id}>
      <TextWrapper>
        <h2>{titulo}</h2>
        <p>{textoPrincipal}</p>
      </TextWrapper>
      <ImgWrapper url={url}>
        {url ? (
          <a target="_blank" href={`${url}`}>
            <img src={image} alt="" />
          </a>
        ) : (
          <img src={image} alt="" />
        )}
      </ImgWrapper>
    </Container>
  )
}
