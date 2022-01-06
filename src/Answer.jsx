import styled from "@emotion/styled";

import COLORS from "./constants/color";

import getAnswerColor from "./utils/getAnswerColor";

const Answer = ({
  answer,
  isCorrect,
  isIncorrect,
  checkedAnswer,
  onClick,
}) => {
  const handleClick = (answer) => {
    if (checkedAnswer) {
      return;
    }

    onClick(answer);
  };

  return (
    <Wrap isCorrect={isCorrect} isIncorrect={isIncorrect}>
      <button
        disabled={checkedAnswer}
        onClick={() => handleClick(answer)}
      >
        {answer}
      </button>
      {isCorrect && (
        <Mark
          isCorrect={isCorrect}
          isIncorrect={isIncorrect}
        >
          정답
        </Mark>
      )}

      {isIncorrect && (
        <Mark
          isCorrect={isCorrect}
          isIncorrect={isIncorrect}
        >
          오답
        </Mark>
      )}
    </Wrap>
  );
};

export const Wrap = styled.li`
  position: relative;
  button {
    width: 100%;
    padding: 15px;
    border: 1px solid
      ${({ isCorrect, isIncorrect }) =>
        getAnswerColor({ isCorrect, isIncorrect })};
    border-radius: 20px;
    font-size: 15px;
    color: ${({ isCorrect, isIncorrect }) =>
      getAnswerColor({ isCorrect, isIncorrect })};

    &:disabled {
      cursor: not-allowed;
    }

    &:hover:not(&:disabled) {
      border-color: ${COLORS.GREEN};
      color: ${COLORS.GREEN};
    }
  }
`;

export const Mark = styled.em`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  padding: 8px 20px;
  border-radius: 20px;
  background: ${({ isCorrect, isIncorrect }) =>
    getAnswerColor({ isCorrect, isIncorrect })};
  font-size: 14px;
  color: #fff;
`;

export default Answer;
