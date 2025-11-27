import { STRINGS_PT } from '../../constants'
import { Container, TextWrapper } from './styles'

export default function Footer() {
  return (
    <Container>
      <TextWrapper>
        <p>{STRINGS_PT.footer.copyright}</p>
      </TextWrapper>
    </Container>
  )
}
