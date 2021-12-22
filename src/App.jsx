import { useNavigate } from "react-router-dom";

import getQuestionPagePath from "./utils/getQuestionPagePath";
import setQuestions from "./utils/setQuestions";

export default function App() {
  let navigate = useNavigate();

  const handleClick = async () => {
    await setQuestions();

    navigate(getQuestionPagePath({ page: 1 }));
  };

  return (
    <>
      <p>지금부터 랜덤 퀴즈 풀이를 시작합니다</p>
      <p>준비가 되셨다면 아래의 버튼을 클릭해 주세요!</p>
      <button onClick={handleClick}>퀴즈 풀기</button>
    </>
  );
}
