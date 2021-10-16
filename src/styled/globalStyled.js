import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body,* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    font-size: 16px;
  }

  html {
    scroll-behavior: smooth;
  }

  .swal2-styled.swal2-confirm {
    background:  ${(props) => props.theme.color.main.normal};
  }
  .swal2-styled.swal2-cancel {
      background:  ${(props) => props.theme.color.red.normal};
  }
  .swal2-styled.swal2-danger {
      background:  ${(props) => props.theme.color.red.normal};
  }
  .swal2-file, .swal2-input, .swal2-textarea{
    border: 1px solid ${(props) => props.theme.color.main.normal};
    &:focus{
      border: 1px solid ${(props) => props.theme.color.main.ligth};
      box-shadow: inset 0 0 6px ${(props) => props.theme.color.main.light};
    }
  }

`;
export default GlobalStyle;
