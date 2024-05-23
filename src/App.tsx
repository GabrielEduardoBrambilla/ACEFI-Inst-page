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
const Texto_Secundario = `O caicam é realizado com ajuda de voluntarios se quiser passar um dia conosco e nos ajudar a realizar o evento seria um prazer recebelo para participar como voluntariado entre em contato com 45 998294308
`
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <MainBanner diaEscrito=" DOIS DE JULHO " diaNumero=" 02/06 " />
      <ContentSection
        titulo="Participe do Caicam"
        textoPrincipal={Texto_Principal}
        image={Location}
      />
      <ContentSection
        titulo="Voluntariado"
        textoPrincipal={Texto_Principal}
        image={Volunteer}
      />
      <Gallery />
      <History />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
