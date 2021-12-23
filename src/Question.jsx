import { Link, useParams } from "react-router-dom";

import * as Layout from "./style/Layout";
import * as status from "./constants/status";

import useQuestion from "./hooks/useQuestion";
import Button from "./style/button";

export default function Question() {
  const { id } = useParams();

  const { question } = useQuestion({ id });

  const { title, answers } = question || {};

  return (
    <Layout.Wrapper>
      {question === status.NONE_DATA && (
        <>
          <h2>준비된 문제가 없습니다</h2>
          <Button to="/" as={Link}>
            메인 화면으로 돌아가기
          </Button>
        </>
      )}
      <h2>{title}</h2>
      <ul>
        {answers?.map((answer, index) => (
          <li key={index}>
            <button>{answer}</button>
          </li>
        ))}
      </ul>
    </Layout.Wrapper>
  );
}
