import { Link, useNavigate, useParams } from "react-router-dom";

import styled from "@emotion/styled";

import isNoneDate from "./utils/isNoneData";

import COLORS from "./constants/color";
import * as path from "./constants/path";

import * as Layout from "./style/Layout";
import Button from "./style/button";

import useQuestion from "./hooks/useQuestion";

import AnswerList from "./AnswerList";

const Question = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { question, handleChange } = useQuestion({ id });

  const {
    id: questionId,
    title,
    answers,
    checkedAnswer,
    correctAnswer,
  } = question || {};

  const handleAnswerClick = (answer) => {
    handleChange({
      ...question,
      checkedAnswer: answer,
    });
  };

  const handleNextClick = () => {
    const nextPage = questionId + 1;

    navigate(`${path.QUESTION}/${nextPage}`);
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
      <AnswerList
        answers={answers}
        checkedAnswer={checkedAnswer}
        correctAnswer={correctAnswer}
        handleClick={handleAnswerClick}
      />
      {checkedAnswer && <Button onClick={handleNextClick}>다음 문항</Button>}
    </Layout.Wrapper>
  );
};

export const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 25px;
  color: ${COLORS.BLACK};
`;

export default Question;
