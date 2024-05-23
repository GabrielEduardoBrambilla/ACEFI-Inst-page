import React from 'react'
import { Container, InputWrapper, MessageWrapper } from './styles'

export default function ContactForm() {
  return (
    <Container>
      <InputWrapper>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
      </InputWrapper>
      <MessageWrapper>
        <input type="textarea" />
        <button type="submit">Send</button>
      </MessageWrapper>
    </Container>
  )
}
