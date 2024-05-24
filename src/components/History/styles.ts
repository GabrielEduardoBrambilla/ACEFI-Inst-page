import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1350px;
  margin: 16px;
  > h2 {
    /* margin: 32px 0 0; */
    text-align: center;
  }
  h4 {
    margin: 16px 0 8px 0;
  }
  > p {
    text-align: justify;
  }
  @media (min-width: 526px) {
    padding: 16px;
    margin: auto;
  }
`
