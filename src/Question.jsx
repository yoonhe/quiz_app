import { Link, useParams } from "react-router-dom";

import styled from "@emotion/styled";

import isNoneDate from "./utils/isNoneData";

import COLORS from "./constants/color";

import * as Layout from "./style/Layout";
import Button from "./style/button";

import useQuestion from "./hooks/useQuestion";

const Question = () => {
  const { id } = useParams();

  const { question } = useQuestion({ id });

  const { title, answers } = question || {};

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
        {answers?.map((answer, index) => (
          <Answer key={index}>
            <button>{answer}</button>
          </Answer>
        ))}
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

export const Answer = styled.li`
  button {
    width: 100%;
    padding: 15px;
    border: 1px solid ${COLORS.GRAY};
    border-radius: 20px;
    font-size: 15px;
    color: ${COLORS.GRAY};

    &:hover {
      border-color: ${COLORS.GREEN};
      color: ${COLORS.GREEN};
    }
  }
`;

export default Question;
