import { useState } from 'react'
import {
  Container,
  InputWrapper,
  MessageWrapper,
  FormWrapper,
  TextWrapper
} from './styles'
import { PaperPlaneTilt } from 'phosphor-react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const phoneNumber = '5545998294308' // Replace with the target WhatsApp number in international format, e.g., '1234567890'
    const text = `Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`
    const encodedText = encodeURIComponent(text)
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedText}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <Container>
      <TextWrapper>
        <h2>Nos ajude com sua opinião</h2>
        <p>Conte onde podemos melhorar</p>
      </TextWrapper>
      <FormWrapper>
        <InputWrapper>
          <input
            type="text"
            value={name}
            placeholder="Seu nome"
            id=""
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="E-mail"
            id=""
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={subject}
            placeholder="Assunto"
            id=""
            onChange={e => setSubject(e.target.value)}
          />
        </InputWrapper>
        <MessageWrapper>
          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            <PaperPlaneTilt size={32} weight="fill" />
          </button>
        </MessageWrapper>
      </FormWrapper>
    </Container>
  )
}
