import { css } from "@emotion/react";

import COLORS from "../constants/color";

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
    color: #${COLORS.BLACK};
  }

  button {
    border: none;
    background: none;
    outline: none;
  }
`;

export default globalStyle;
