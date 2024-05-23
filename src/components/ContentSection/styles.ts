import styled from 'styled-components'

export const Container = styled.div`
  min-width: 300px;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 8px;
  @media (min-width: 526px) {
    display: flex;
    flex-direction: row;
    /* grid-template-columns: 1fr 1fr; */
    /* align-items: center; */
    margin: auto;
    flex: 1;
  }
`

export const TextWrapper = styled.div`
  flex: 1 1 50%; /* Each item takes up 50% of the container's width */

  h2 {
    margin-bottom: 8px;
  }
`
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 50%; /* Each item takes up 50% of the container's width */

  > img {
    width: 100%;
    border-radius: 10px;
    object-fit: fill;
  }
`
