import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px lightgray;
  }

  body{
    font-family: Inter;
    -webkit-font-smoothing: antialiased;
  }

  
`
