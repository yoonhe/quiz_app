import { render } from "@testing-library/react";

import AnswerList from "./AnswerList";

import QUESTION from "./fixtures/question";

describe("AnswerList", () => {
  const { answers, checkedAnswer, correctedAnswer } = QUESTION;

  it("여러개의 답안을 화면에 표시합니다", () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <AnswerList
        answers={answers}
        checkedAnswer={checkedAnswer}
        correctAnswer={correctedAnswer}
        handleClick={handleClick}
      />
    );

    answers.forEach((answer) => {
      expect(
        getByRole("button", {
          name: answer,
        })
      ).toBeInTheDocument();
    });
  });
});
