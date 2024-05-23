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
  @media (min-width: 526px) {
    margin: auto;
  }
`
