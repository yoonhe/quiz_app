import * as localStorageKey from "../constants/localStorageKey";
import * as storage from "./storage";

const getQuestion = ({ id }) => {
  const { questions } = storage.getItem(localStorageKey.QUESTIONS) || {};

  return questions?.find((question) => question.id === id) || null;
};

export default getQuestion;
