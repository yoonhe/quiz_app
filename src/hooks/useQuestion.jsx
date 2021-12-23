import { useState, useEffect } from "react";

import * as status from "../constants/status";

import getQuestion from "../utils/getQuestion";

const useQuestion = ({ id }) => {
  const [state, setState] = useState(null);

  const handleChange = (nextState) => setState(nextState);

  useEffect(() => {
    const questionData = getQuestion({ id: Number(id) });

    handleChange(questionData || status.NONE_DATA);
  }, []);

  return {
    question: state,
    handleChange,
  };
};

export default useQuestion;
