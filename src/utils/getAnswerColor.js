import COLORS from "../constants/color";

const getAnswerColor = ({ isCorrect, isIncorrect }) => {
  if (isCorrect) {
    return COLORS.GREEN;
  }

  if (isIncorrect) {
    return COLORS.RED;
  }

  return COLORS.GRAY;
};

export default getAnswerColor;
