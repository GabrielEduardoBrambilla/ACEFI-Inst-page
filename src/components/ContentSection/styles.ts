import styled from 'styled-components'
interface ContainerProps {
  reverse?: boolean
  url?: string
}
export const Container = styled.div<ContainerProps>`
  min-width: 300px;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 8px;
  @media (min-width: 526px) {
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
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
export const ImgWrapper = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex: 1 1 50%;
  cursor: ${props => (props.url ? 'pointer' : 'undefined')};
  img {
    width: 100%;
    border-radius: 10px;
    object-fit: fill;
  }
  &:hover {
    opacity: ${props => (props.url ? '.6' : 'undefined')};
  }
`
