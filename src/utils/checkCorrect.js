const isEqual = (A, B) => A === B;

const isEmptyString = (checkedAnswer) => checkedAnswer === "";

const isCheckedAnswer = ({ answer, checkedAnswer }) =>
  !isEmptyString(checkedAnswer) && isEqual(answer, checkedAnswer);

const isCorrect = ({ answer, checkedAnswer, correctAnswer }) =>
  !isEmptyString(checkedAnswer) && isEqual(answer, correctAnswer);

const isIncorrect = ({ answer, checkedAnswer, correctAnswer }) =>
  isCheckedAnswer({ answer, checkedAnswer }) &&
  !isEqual(checkedAnswer, correctAnswer);

export { isEqual, isEmptyString, isCorrect, isIncorrect };
