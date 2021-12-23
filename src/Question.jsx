import { Link, useParams } from "react-router-dom";

import styled from "@emotion/styled";

import isNoneDate from "./utils/isNoneData";
import * as checkedCorrect from "./utils/checkCorrect";

import COLORS from "./constants/color";

import * as Layout from "./style/Layout";
import Button from "./style/button";

import useQuestion from "./hooks/useQuestion";

import Answer from "./Answer";

const Question = () => {
  const { id } = useParams();

  const { question, handleChange } = useQuestion({ id });

  const { title, answers, checkedAnswer, correctAnswer } = question || {};

  const handleClick = (answer) => {
    handleChange({
      ...question,
      checkedAnswer: answer,
    });
  };

  return (
    <Layout.Wrapper>
      {isNoneDate(question) && (
        <>
          <h2>준비된 문제가 없습니다</h2>
          <Button to="/" as={Link}>
            메인 화면으로 돌아가기
          </Button>
        </>
      )}
      <Title>{title}</Title>
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
    </Layout.Wrapper>
  );
};

export const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 25px;
  color: ${COLORS.BLACK};
`;

export const List = styled.ul`
  width: 100%;

  li + li {
    margin-top: 15px;
  }
`;

export default Question;
