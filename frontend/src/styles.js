import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    align-content: center;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background: #241c2d;
  }
`;

export default GlobalStyle;
