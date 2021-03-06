import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;900&display=swap');

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    background: ${colors.black};
    color: ${colors.white};
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-weight: 900;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
