import reactDom from "react-dom";
import { Global } from "@emotion/react";

import globalStyle from "./src/style/globalStyle";

import Router from "./src/Router";

reactDom.render(
  <>
    <Global styles={globalStyle} />
    <Router />
  </>,
  document.querySelector("#root")
);
