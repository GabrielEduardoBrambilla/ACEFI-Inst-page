import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 3px rgba(242, 109, 9, 0.3);
  }

  body{
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
    color: #1a1a1a;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: #1a1a1a;
  }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    margin-bottom: 1rem;
  }

  h4 {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    font-weight: 600;
    color: #2d2d2d;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.7;
    color: #4a4a4a;
  }

  a {
    transition: all 0.3s ease;
  }

  button {
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 526px) {
    body {
      font-size: 18px;
    }
  }
`
