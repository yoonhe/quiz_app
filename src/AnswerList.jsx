import styled from "@emotion/styled";

import Answer from "./Answer";

import * as checkedCorrect from "./utils/checkCorrect";

const AnswerList = ({ answers, checkedAnswer, correctAnswer, handleClick }) => {
  return (
    <List>
      {answers?.map((answer, index) => {
        const isCorrect = checkedCorrect.isCorrect({
          answer,
          checkedAnswer,
          correctAnswer,
        });

        const isIncorrect = checkedCorrect.isIncorrect({
          answer,
          checkedAnswer,
          correctAnswer,
        });

        return (
          <Answer
            key={index}
            answer={answer}
            isCorrect={isCorrect}
            isIncorrect={isIncorrect}
            checkedAnswer={checkedAnswer}
            onClick={handleClick}
          />
        );
      })}
    </List>
  );
};

export const List = styled.ul`
  width: 100%;

  li + li {
    margin-top: 15px;
  }
`;

export default AnswerList;
