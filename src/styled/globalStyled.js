import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body,* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Segoe UI', 'Roboto', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }
  


`;
export default GlobalStyle;
