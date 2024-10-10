import styled from 'styled-components'
interface ContainerProps {
  reverse?: boolean
  url?: string
}
export const Container = styled.div<ContainerProps>`
// desktop
  display: flex;
  margin: auto;
  flex: 1;
  min-width: 300px;
  max-width: 1350px;
  gap: 16px;
  flex-direction: column-reverse;
  padding: 16px 8px;

  @media (min-width: 500px) {
     margin: 0 2rem;
  }
  @media (min-width: 900px) {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};,
    margin: auto auto;
    background:red;
 }

`
// flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
// @media (max-width: 900px) {
  // }
  // @media (max-width: 900px) {
  // // Tablet and mobile

  // }
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
    width: 100%;
  cursor: ${props => (props.url ? 'pointer' : 'undefined')};
  > a {
    width: 100%;
  }
  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  &:hover {
    opacity: ${props => (props.url ? '.6' : 'undefined')};
  }
`
