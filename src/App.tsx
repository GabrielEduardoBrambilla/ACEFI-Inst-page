import { useState } from 'react'
import NavBar from './components/NavBar'
import 'styles.modules.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      {/* <MainBanner /> */}
      {/* <ContentSection /> */}
      {/* <ContentSection /> */}
      {/* <Galeria /> */}
      {/* <History /> */}
      {/* <ContactForm /> */}
    </>
  )
}

export default App
