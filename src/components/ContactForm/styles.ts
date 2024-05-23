import styled from 'styled-components'
export const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 764px;
  gap: 16px;
  margin: 16px;
  border-style: none;
  input {
    background-color: #d9d9d9;
    border: transparent;
    padding: 12px;
    border-radius: 10px;
    text-align: start;
  }
  @media (min-width: 526px) {
    max-width: 1350px;
    text-align: center;
    width: 100%;
    margin: 32px auto;
  }
`
export const FormWrapper = styled.div`
  max-width: 1350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 526px) {
    flex-direction: row;
    justify-content: center;
    flex-grow: 1;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  gap: 16px;
  justify-content: space-between;
  flex-direction: column;
  > input {
    height: 100%;
  }
  @media (min-width: 526px) {
    width: 50%;
  }
`
export const MessageWrapper = styled.div`
  textarea {
    background-color: #d9d9d9;
    border: transparent;
    padding: 8px;
    border-radius: 10px;
    text-align: start;
    width: 100%;
    height: 315px;
    text-align: start;
    vertical-align: top;
    resize: none;
    &::placeholder {
      text-align: start;
      vertical-align: top;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 45px;
    height: 45px;
    bottom: 0;
    right: 0;
    border-radius: 100%;
    margin: 8px;
    border: transparent;
    background-color: #d37e40;
    > svg {
      height: 30px;
      width: 30px;
      color: white;
    }
  }

  @media (min-width: 526px) {
    width: 50%;
  }
`

export const TextWrapper = styled.div``
