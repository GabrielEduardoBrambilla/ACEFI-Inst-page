import styled from 'styled-components'
export const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  gap: 24px;
  margin: 80px auto;
  padding: 56px 24px;
  border-style: none;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);

  input {
    background-color: #f5f5f5;
    border: 2px solid transparent;
    padding: 16px 18px;
    border-radius: 12px;
    text-align: start;
    font-size: 16px;
    transition: all 0.3s ease;
    font-family: inherit;

    &:focus {
      background-color: white;
      border-color: rgba(242, 109, 9, 0.3);
      box-shadow: 0 0 0 3px rgba(242, 109, 9, 0.1);
    }

    &::placeholder {
      color: #999;
    }
  }

  @media (min-width: 526px) {
    padding: 64px 3rem;
  }

  @media (min-width: 900px) {
    padding: 72px 4rem;
  }
`
export const FormWrapper = styled.div`
  max-width: 1350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 526px) {
    flex-direction: row;
    justify-content: center;
    flex-grow: 1;
    gap: 24px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  border-radius: 12px;
  gap: 20px;
  justify-content: space-between;
  flex-direction: column;

  > input {
    font-size: 16px;
    height: 100%;
    min-height: 52px;
  }

  @media (min-width: 526px) {
    width: 50%;
  }
`
export const MessageWrapper = styled.div`
  position: relative;

  textarea {
    font-size: 16px;
    background-color: #f5f5f5;
    border: 2px solid transparent;
    padding: 16px 18px;
    border-radius: 12px;
    text-align: start;
    width: 100%;
    height: 315px;
    vertical-align: top;
    resize: none;
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
      background-color: white;
      border-color: rgba(242, 109, 9, 0.3);
      box-shadow: 0 0 0 3px rgba(242, 109, 9, 0.1);
    }

    &::placeholder {
      text-align: start;
      vertical-align: top;
      color: #999;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 52px;
    height: 52px;
    bottom: 12px;
    right: 12px;
    border-radius: 100%;
    cursor: pointer;
    border: transparent;
    background: linear-gradient(
      135deg,
      rgba(242, 109, 9, 1) 0%,
      rgba(242, 26, 38, 1) 100%
    );
    box-shadow: 0 4px 15px rgba(242, 109, 9, 0.3);
    transition: all 0.3s ease;

    > svg {
      height: 28px;
      width: 28px;
      color: white;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(242, 109, 9, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (min-width: 526px) {
    width: 50%;
  }
`

export const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 16px;

  h2 {
    margin-bottom: 8px;
  }

  p {
    color: #666;
    font-size: 1.05rem;
  }
`
