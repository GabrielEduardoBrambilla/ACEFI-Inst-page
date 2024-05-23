import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 552px;
  max-width: 1350px;
  margin: 32px 16px;
  overflow: hidden;
  > div {
    max-height: 552px;

    border-radius: 10px;
  }

  @media (min-width: 526px) {
    margin: auto;
  }
`
