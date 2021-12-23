import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

import getQuestionPagePath from "./utils/getQuestionPagePath";

import COLORS from "./constants/color";

import LoadingModal from "./LoadingModal";

import * as Layout from "./style/Layout";
import Button from "./style/button";

import useSetQuestion from "./hooks/useSetQuestion";

const App = () => {
  const navigate = useNavigate();

  const { isLoading, isSuccess, handleSetQuestions } = useSetQuestion();

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    navigate(getQuestionPagePath({ page: 1 }));
  }, [isSuccess]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <Layout.Wrapper>
        <Text>지금부터 랜덤 퀴즈 풀이를 시작합니다</Text>
        <Text>준비가 되셨다면 아래의 버튼을 클릭해 주세요!</Text>
        <Button onClick={handleSetQuestions}>퀴즈 풀기</Button>
      </Layout.Wrapper>
    </>
  );
};

const Text = styled.p`
  color: ${COLORS.BLACK};
  font-size: 25px;

  & + & {
    margin-top: 15px;
  }
`;

export default App;
