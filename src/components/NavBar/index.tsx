import { Container, ImgWrapper, ItemsWrapper, NavContent, SakuraDecoration } from './styles'
import Logo from '../../assets/Logo 1.svg'

interface NavBarProps {
  FirstId: string
  SecondId: string
  ThirdId: string
}
export default function NavBar({ FirstId, SecondId, ThirdId }: NavBarProps) {
  return (
    <Container>
      <SakuraDecoration>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
        <div className="sakura-petal"></div>
      </SakuraDecoration>
      <NavContent>
        <ImgWrapper>
          <img src={Logo} alt="" />
        </ImgWrapper>
        <ItemsWrapper className="">
          <a href={`#${FirstId}`}>Nossa história</a>
          <a href={`#${SecondId}`}>Voluntarios</a>
          <a href={`#${ThirdId}`}>Próximos eventos</a>
        </ItemsWrapper>
      </NavContent>
    </Container>
  )
}
