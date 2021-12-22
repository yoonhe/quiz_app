import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import App from "./App";
import Question from "./Question";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/question/*" />
        <Route path="question/:id" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
