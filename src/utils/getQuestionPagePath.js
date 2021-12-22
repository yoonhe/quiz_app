import * as path from "../constants/path";

const getQuestionPagePath = ({ page }) => {
  return `${path.QUESTION}/${page}`;
};

export default getQuestionPagePath;
