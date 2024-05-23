import styled from 'styled-components'

export const Container = styled.div`
  min-width: 300px;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 8px 0px;
`

export const TextWrapper = styled.div``
export const ImgWrapper = styled.div`
  > img {
    width: 100%;
    border-radius: 10px;
    object-fit: fill;
  }
`
