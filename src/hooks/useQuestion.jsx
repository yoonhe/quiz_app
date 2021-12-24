import { useState, useEffect } from "react";

import * as status from "../constants/status";

import * as storage from "../utils/storage";
import * as localStorageKey from "../constants/localStorageKey";

import getQuestion from "../utils/getQuestion";

const useQuestion = ({ id }) => {
  const [question, setQuestion] = useState(null);

  const { checkedAnswer } = question || {};

  const handleChange = (nextState) => {
    setQuestion(nextState);
  };

  const setStorage = () => {
    const storageData = storage.getItem(localStorageKey.QUESTIONS);

    const newQuestions = storageData.questions.map((storageQuestion) =>
      Number(id) === storageQuestion.id ? question : storageQuestion
    );

    storage.updateItem({
      key: localStorageKey.QUESTIONS,
      updateProperty: "questions",
      updateValue: newQuestions,
    });
  };

  useEffect(() => {
    const questionData = getQuestion({ id: Number(id) });

    handleChange(questionData || status.NONE_DATA);
  }, [id]);

  useEffect(() => {
    if (!checkedAnswer) {
      return;
    }

    setStorage();
  }, [checkedAnswer, id, question]);

  return {
    question,
    handleChange,
  };
};

export default useQuestion;
