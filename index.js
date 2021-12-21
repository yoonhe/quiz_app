import reactDom from "react-dom";

import App from "./src/App";

const { worker } = require("./src/mocks/browser");

worker.start();

reactDom.render(<App />, document.querySelector("#root"));
