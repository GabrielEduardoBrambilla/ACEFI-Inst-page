import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1350px;
  margin: 64px auto;
  padding: 56px 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);

  > h2 {
    text-align: center;
    margin-bottom: 48px;
    position: relative;
    padding-bottom: 20px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(
        135deg,
        rgba(242, 109, 9, 1) 0%,
        rgba(242, 26, 38, 1) 100%
      );
      border-radius: 2px;
    }
  }

  h4 {
    margin: 32px 0 12px 0;
    color: #2d2d2d;
    font-weight: 600;

    &:first-of-type {
      margin-top: 0;
    }
  }

  > p {
    text-align: justify;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  @media (min-width: 500px) {
    margin: 80px 2rem;
    padding: 64px 3rem;
  }

  @media (min-width: 900px) {
    margin: 96px auto;
    padding: 80px 4rem;
  }
`
