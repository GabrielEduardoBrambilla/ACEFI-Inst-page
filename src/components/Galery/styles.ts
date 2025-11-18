import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  max-width: 1350px;
  margin: 64px auto;
  padding: 0 24px;
  overflow: hidden;

  > div {
    max-height: 600px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 526px) {
    margin: 80px auto;
    padding: 0 2rem;
  }

  @media (min-width: 900px) {
    padding: 0;
  }
`
