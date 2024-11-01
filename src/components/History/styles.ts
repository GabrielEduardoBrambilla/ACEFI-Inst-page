import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1350px;
  margin: 16px;
  > h2 {
    text-align: center;
  }
  h4 {
    margin: 16px 0 8px 0;
  }
  > p {
    text-align: justify;
  }
  @media (min-width: 500px) {
    margin: 0 2rem;
  }
  @media (min-width: 900px) {
    padding: 0 2rem;
    margin: auto;
  }
`
