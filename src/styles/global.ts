import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  body, #root, .blocking-class {
    width: 100%;
    min-height: 100vh;
    background-color: #443742;
  }
  
  .block-ui {
    height: 100%;
  }
  
  .block-ui-container, .blocking-class {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
