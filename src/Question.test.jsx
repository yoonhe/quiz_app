import { render } from "@testing-library/react";

import Question from "./Question";

import useQuestion from "./hooks/useQuestion";

import QUESTION from "./fixtures/question";

jest.mock("./hooks/useQuestion");

describe("Question", () => {
  const createQuestion = () => render(<Question />);

  useQuestion.mockImplementation(() => ({
    question: given.question || QUESTION,
  }));

  it("문항을 화면에 표시합니다", () => {
    const { getByText } = createQuestion();

    expect(getByText(QUESTION.title)).toBeInTheDocument();
  });

  it("답안을 화면에 표시합니다", () => {
    const { getByRole } = createQuestion();

    QUESTION.answers.forEach((answer) => {
      expect(
        getByRole("button", {
          name: answer,
        })
      ).toBeInTheDocument();
    });
  });

  context("선택한 답안이 정답인 경우", () => {
    given("question", () => ({
      ...QUESTION,
      answers: ["사과", "딸기", "바나나", "포도"],
      correctAnswer: "사과",
      checkedAnswer: "사과",
    }));

    it("정답 답안이 표시됩니다", () => {
      const { getByText } = createQuestion();

      expect(getByText("정답")).toBeInTheDocument();
    });
  });

  context("선택한 답안이 정답이 아닌 경우", () => {
    given("question", () => ({
      ...QUESTION,
      answers: ["사과", "딸기", "바나나", "포도"],
      correctAnswer: "사과",
      checkedAnswer: "딸기",
    }));

    it("'오답' 이 표시됩니다", () => {
      const { getByText } = createQuestion();

      expect(getByText("오답")).toBeInTheDocument();
    });
  });
});
