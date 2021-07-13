import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  body {
    width: 100%;
    height: 100%;
    background-color: #443742;
  }
  html, #root {
    height: 100% !important;
  }
`;

export default GlobalStyle;
