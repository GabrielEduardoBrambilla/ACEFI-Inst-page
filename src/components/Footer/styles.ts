import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  background: linear-gradient(
    135deg,
    rgba(242, 109, 9, 1) 0%,
    rgba(242, 26, 38, 1) 100%
  );
  margin-top: -16px;
`

export const TextWrapper = styled.div`
  display: flex;
  min-height: 100px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  padding: 32px 24px;
  overflow: hidden;
  flex-wrap: wrap;

  p {
    color: white;
    opacity: 0.95;
    font-size: 0.95rem;
  }

  @media (min-width: 526px) {
    p {
      font-size: 1rem;
    }
  }
`
