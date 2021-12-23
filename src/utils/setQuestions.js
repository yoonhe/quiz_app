import * as localStorageKey from "../constants/localStorageKey";
import * as url from "../constants/url";
import * as callApi from "./callApi";
import * as storage from "./storage";

const setQuestions = async () => {
  const { results } = await callApi.get(url.QUESTIONS);

  const questions = results.map(
    ({ question: title, incorrect_answers, correct_answer }, index) => ({
      id: index + 1,
      title,
      answers: [...incorrect_answers, correct_answer],
      correct_answer,
      checked_answer: "",
    })
  );

  const value = {
    startTime: new Date(),
    endTime: "",
    questions,
  };

  storage.setItem({ key: localStorageKey.QUESTIONS, value });
};

export default setQuestions;
