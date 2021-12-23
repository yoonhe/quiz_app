import { fireEvent, render } from "@testing-library/react";

import QUESTION from "./fixtures/question";

import Answer from "./Answer";

describe("Answer", () => {
  const handleClick = jest.fn();

  const createAnswer = () =>
    render(
      <Answer
        answer="답안1"
        isCorrect={given.isCorrect}
        isIncorrect={given.isIncorrect}
        checkedAnswer={given.checkedAnswer}
        onClick={handleClick}
      />
    );

  it("답안이 표시됩니다", () => {
    const { getByText } = createAnswer();

    expect(getByText("답안1")).toBeInTheDocument();
  });

  context("선택한 답안이 정답인 경우", () => {
    given("isCorrect", () => true);

    it("'정답' 마크가 표시됩니다", () => {
      const { getByText } = createAnswer();

      expect(getByText("정답")).toBeInTheDocument();
    });
  });

  context("선택한 답안이 오답인 경우", () => {
    given("isIncorrect", () => true);

    it("'오답' 마크와 '정답' 마크가 함께 표시됩니다", () => {
      const { getByText } = createAnswer();

      expect(getByText("오답")).toBeInTheDocument();
      expect(getByText("정답")).toBeInTheDocument();
    });
  });

  context("선택된 답안이 있는 경우", () => {
    given("checkedAnswer", () => true);

    it("답안을 클릭하면 handleClick 함수가 실행되지 않습니다", () => {
      const { getByRole } = createAnswer();

      fireEvent.click(
        getByRole("button", {
          name: QUESTION.answers[0],
        })
      );

      expect(handleClick).not.toBeCalled();
    });
  });

  context("선택한 답안이 없는 경우", () => {
    given("checkedAnswer", () => false);

    it("답안을 클릭하면 handleClick 함수가 실행됩니다", () => {
      const { getByRole } = createAnswer();

      fireEvent.click(
        getByRole("button", {
          name: QUESTION.answers[0],
        })
      );

      expect(handleClick).toBeCalledWith(QUESTION.answers[0]);
    });
  });
});
