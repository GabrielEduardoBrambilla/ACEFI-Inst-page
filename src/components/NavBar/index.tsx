import { Container, ImgWrapper, ItemsWrapper, NavContent, SakuraDecoration } from './styles'
import Logo from '../../assets/Logo 1.svg'
import { STRINGS_PT } from '../../constants'

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
          <a href={`#${FirstId}`}>{STRINGS_PT.nav.ourHistory}</a>
          <a href={`#${SecondId}`}>{STRINGS_PT.nav.volunteers}</a>
          <a href={`#${ThirdId}`}>{STRINGS_PT.nav.upcomingEvents}</a>
        </ItemsWrapper>
      </NavContent>
    </Container>
  )
}
