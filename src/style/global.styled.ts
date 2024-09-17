import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    height: 100%;
    user-select: none;
  }
  
  body {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: 400;
      background-color: ${(p) => p.theme.palette.base};
  }
  
  .relative {
      position: relative;
  }

  .flex {
      display: flex;
  }

  .align-center {
      align-items: center;
  }

  .flex-column {
      flex-direction: column;
  }

  .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .cursor-pointer {
      cursor: pointer;
  }
  
  .mt-20 {
      margin-top: 20px;
  }
`;

export default GlobalStyles;
