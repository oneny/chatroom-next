import { css } from "@emotion/react";

const reset = css`
    *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.4rem;
    background-color: #f8f8f8;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    border: none;
    background: none;
    font-size: inherit;
    font: inherit;
    outline: none;
  }

  button {
    cursor: pointer;
  }
  
  .ir {
    display: block;
    overflow: hidden;
    font-size: 1px;
    line-height: 0;
    text-indent: -9999px;
    color: transparent;
  }
`;

export default reset;