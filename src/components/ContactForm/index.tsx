import React from 'react'
import {
  Container,
  InputWrapper,
  MessageWrapper,
  FormWrapper,
  TextWrapper
} from './styles'
import { PaperPlaneTilt } from 'phosphor-react'

export default function ContactForm() {
  return (
    <Container>
      <TextWrapper>
        <h2>Nos ajude com sua opinião</h2>
        <p>Conte onde podemos melhorar</p>
      </TextWrapper>
      <FormWrapper>
        <InputWrapper>
          <input type="text" placeholder="Seu nome" id="" />
          <input type="email" placeholder="E-mail" id="" />
          <input type="text" placeholder="Assunto" id="" />
        </InputWrapper>
        <MessageWrapper>
          <textarea placeholder="Mensagem" />
          <button type="submit">
            <PaperPlaneTilt size={32} weight="fill" />
          </button>
        </MessageWrapper>
      </FormWrapper>
    </Container>
  )
}
