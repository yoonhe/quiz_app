import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import { Global } from "@emotion/react";

import getQuestionPagePath from "./utils/getQuestionPagePath";
import setQuestions from "./utils/setQuestions";

import globalStyle from "./style/globalStyle";

import COLORS from "./constants/color";

const App = () => {
  let navigate = useNavigate();

  const handleClick = async () => {
    await setQuestions();

    navigate(getQuestionPagePath({ page: 1 }));
  };

  return (
    <>
      <Global styles={globalStyle} />
      <Wrapper>
        <Text>지금부터 랜덤 퀴즈 풀이를 시작합니다</Text>
        <Text>
          준비가 되셨다면 아래의 버튼을 클릭해 주세요!
        </Text>
        <Button onClick={handleClick}>퀴즈 풀기</Button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.p`
  font-size: 25px;

  & + & {
    margin-top: 15px;
  }
`;

const Button = styled.button`
  margin-top: 50px;
  padding: 20px 50px;
  background: ${COLORS.GREEN};
  font-size: 20px;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
`;

export default App;
