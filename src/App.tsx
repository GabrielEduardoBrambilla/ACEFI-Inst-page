import Location from './assets/Location.png'
import Volunteer from './assets/Volunteer.png'
import ContactForm from './components/ContactForm'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'
import Gallery from './components/Galery'
import History from './components/History'
import MainBanner from './components/MainBanner'
import NavBar from './components/NavBar'
import { CONTACTS, STRINGS_PT } from './constants'
import { Container } from './styles'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <NavBar FirstId="history" SecondId="voluntario" ThirdId="" />
      <MainBanner
        diaEscrito={STRINGS_PT.events.dateWritten}
        diaNumero={STRINGS_PT.events.dateNumeric}
      />
      <ContentSection
        url={CONTACTS.location.googleMapsUrl}
        id="nada"
        titulo={STRINGS_PT.contentSections.participateCaicam.title}
        textoPrincipal={STRINGS_PT.contentSections.participateCaicam.description}
        image={Location}
      />
      <ContentSection
        reverse
        id="voluntario"
        titulo={STRINGS_PT.contentSections.volunteer.title}
        textoPrincipal={STRINGS_PT.contentSections.volunteer.description}
        image={Volunteer}
      />
      <Gallery />
      <History id="history" />
      <ContactForm />
      <Footer />
    </Container>
  )
}

export default App
