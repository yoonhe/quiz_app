import { useState, useEffect } from "react";

import * as status from "../constants/status";

import getQuestion from "../utils/getQuestion";

const useQuestion = ({ id }) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const questionData = getQuestion({ id: Number(id) });

    setQuestion(questionData || status.NONE_DATA);
  }, []);

  return {
    question,
  };
};

export default useQuestion;
