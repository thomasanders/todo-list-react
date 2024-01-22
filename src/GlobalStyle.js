import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background: #eee;
    font-family: 'Poppins', sans-serif;
    background-color: hsl(0, 0%, 95%);
  }
`;