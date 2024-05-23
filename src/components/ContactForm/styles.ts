import styled from 'styled-components'
export const Container = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  max-width: 764px;
  gap: 16px;
  margin: 16px;
  border-style: none;
`
export const InputWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  gap: 16px;
  justify-content: space-between;
  flex-direction: column;
`
export const MessageWrapper = styled.div`
  input {
    width: 100%;
    height: 315px;
    border-radius: 10px;
  }
  button {
    position: absolute;
    width: 45px;
    height: 45px;
    bottom: 0;
    right: 0;
    border-radius: 100%;
    margin: 8px;
  }
`
