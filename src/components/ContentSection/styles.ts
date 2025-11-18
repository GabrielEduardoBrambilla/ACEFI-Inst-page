import styled from 'styled-components'
interface ContainerProps {
  reverse?: boolean
  url?: string
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  min-width: 300px;
  max-width: 1350px;
  gap: 32px;
  flex-direction: column-reverse;
  padding: 48px 24px;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 500px) {
    padding: 56px 2rem;
  }

  @media (min-width: 900px) {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    gap: 48px;
    padding: 72px 2rem;
  }
`

export const TextWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin-bottom: 12px;
    color: #1a1a1a;
    position: relative;
    padding-bottom: 16px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(
        135deg,
        rgba(242, 109, 9, 1) 0%,
        rgba(242, 26, 38, 1) 100%
      );
      border-radius: 2px;
    }
  }

  p {
    line-height: 1.8;
    white-space: pre-line;
  }
`

export const ImgWrapper = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex: 1 1 50%;
  width: 100%;
  cursor: ${props => (props.url ? 'pointer' : 'default')};
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  transition: all 0.4s ease;

  > a {
    width: 100%;
    display: block;
  }

  img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.18);

    img {
      transform: scale(1.05);
    }
  }

  ${props => props.url && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(242, 109, 9, 0.3) 0%,
        rgba(242, 26, 38, 0.3) 100%
      );
      opacity: 0;
      transition: opacity 0.4s ease;
      border-radius: 16px;
    }

    &:hover::after {
      opacity: 1;
    }
  `}
`
