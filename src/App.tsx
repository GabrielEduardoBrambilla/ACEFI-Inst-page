import ContentSection from './components/ContentSection'
import MainBanner from './components/MainBanner'
import NavBar from './components/NavBar'
import { GlobalStyle } from './styles/global'
import Location from './assets/Location.png'
import Volunteer from './assets/Volunteer.png'
import Gallery from './components/Galery'
import History from './components/History'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const Texto_Principal = `Venha prestigiar nosso evento neste domingo dia {data}, e experimente
nosso buffe de sukiyaki assim como varias outras opções de pratos
tipicos que estarão disponiveis no Cai na hora.
Crianças 6 a 8 anos: não pagam
Jovem adolescente 9 a 12: R$35,00
Adultos: compra antecipada R$40,00 | na hora R$45,00`

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar FirstId="history" SecondId="voluntario" ThirdId="" />
      <MainBanner diaEscrito=" DOIS DE JULHO " diaNumero=" 02/06 " />
      <ContentSection
        id="nada"
        titulo="Participe do Caicam"
        textoPrincipal={Texto_Principal}
        image={Location}
      />
      <ContentSection
        id="voluntario"
        titulo="Voluntariado"
        textoPrincipal={Texto_Principal}
        image={Volunteer}
      />
      <Gallery />
      <History id="history" />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
