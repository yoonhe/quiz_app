import { css } from "@emotion/react";

const globalStyle = css`
  @import "css-wipe";

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default globalStyle;
