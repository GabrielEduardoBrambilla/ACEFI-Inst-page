import { useState } from 'react'
import {
  FullWidthWrapper,
  Container,
  InputWrapper,
  MessageWrapper,
  FormWrapper,
  TextWrapper,
  JapaneseLandscape
} from './styles'
import { PaperPlaneTilt } from 'phosphor-react'
import { CONTACTS, STRINGS_PT } from '../../constants'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const text = `${STRINGS_PT.contactForm.whatsappTemplate.name}: ${name}\n${STRINGS_PT.contactForm.whatsappTemplate.email}: ${email}\n${STRINGS_PT.contactForm.whatsappTemplate.subject}: ${subject}\n\n${STRINGS_PT.contactForm.whatsappTemplate.message}:\n${message}`
    const encodedText = encodeURIComponent(text)
    const whatsappLink = `https://wa.me/${CONTACTS.whatsapp.phoneNumber}?text=${encodedText}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <FullWidthWrapper>
      <JapaneseLandscape>
        <div className="sun"></div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="mountain-left"></div>
        <div className="mountain-right"></div>
        <div className="mountain-shadow"></div>
        <div className="mountain-snow"></div>
        <div className="sakura sakura-1"></div>
        <div className="sakura sakura-2"></div>
        <div className="sakura sakura-3"></div>
        <div className="sakura sakura-4"></div>
        <div className="sakura sakura-5"></div>
        <div className="sakura sakura-6"></div>
      </JapaneseLandscape>
      <Container>
        <TextWrapper>
          <h2>{STRINGS_PT.contactForm.title}</h2>
          <p>{STRINGS_PT.contactForm.subtitle}</p>
        </TextWrapper>
        <FormWrapper>
          <InputWrapper>
            <input
              type="text"
              value={name}
              placeholder={STRINGS_PT.contactForm.placeholders.name}
              id=""
              onChange={e => setName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder={STRINGS_PT.contactForm.placeholders.email}
              id=""
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={subject}
              placeholder={STRINGS_PT.contactForm.placeholders.subject}
              id=""
              onChange={e => setSubject(e.target.value)}
            />
          </InputWrapper>
          <MessageWrapper>
            <textarea
              placeholder={STRINGS_PT.contactForm.placeholders.message}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <button onClick={handleSubmit} type="submit">
              <PaperPlaneTilt size={32} weight="fill" />
            </button>
          </MessageWrapper>
        </FormWrapper>
      </Container>
    </FullWidthWrapper>
  )
}
