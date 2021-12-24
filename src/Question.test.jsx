import { fireEvent, render } from "@testing-library/react";

import Question from "./Question";

import useQuestion from "./hooks/useQuestion";

import QUESTION from "./fixtures/question";

jest.mock("./hooks/useQuestion");

describe("Question", () => {
  const handleChange = jest.fn();

  const createQuestion = () => render(<Question />);

  useQuestion.mockImplementation(() => ({
    question: given.question || QUESTION,
    handleChange,
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

  context("선택한 답안이 있는 경우", () => {
    given("question", () => ({
      ...QUESTION,
      checkedAnswer: "사과",
    }));

    it("답안을 클릭하면 handleChange 함수가 실행되지 않습니다", () => {
      const { getByRole } = createQuestion();

      fireEvent.click(
        getByRole("button", {
          name: "사과",
        })
      );

      expect(handleChange).toBeCalledTimes(0);
    });

    it("'다음 문항' 버튼이 표시됩니다", () => {
      const { getByRole } = createQuestion();

      expect(
        getByRole("button", {
          name: "다음 문항",
        })
      ).toBeInTheDocument();
    });
  });

  context("선택한 답안이 없는 경우", () => {
    given("question", () => ({
      ...QUESTION,
      checkedAnswer: "",
    }));

    it("답안을 클릭하면 handleChange 함수가 실행됩니다", () => {
      const { getByRole } = createQuestion();

      fireEvent.click(
        getByRole("button", {
          name: "사과",
        })
      );

      expect(handleChange).toBeCalledWith({
        ...QUESTION,
        checkedAnswer: "사과",
      });
    });

    it("'다음 문항' 버튼이 표시되지 않습니다", () => {
      const { queryByRole } = createQuestion();

      expect(
        queryByRole("button", {
          name: "다음 문항",
        })
      ).not.toBeInTheDocument();
    });
  });

  context("선택한 답안이 정답인 경우", () => {
    given("question", () => ({
      ...QUESTION,
      correctAnswer: "사과",
      checkedAnswer: "사과",
    }));

    it("'정답' 마크가 표시됩니다", () => {
      const { getByText } = createQuestion();

      expect(getByText("정답")).toBeInTheDocument();
    });
  });

  context("선택한 답안이 정답이 아닌 경우", () => {
    given("question", () => ({
      ...QUESTION,
      correctAnswer: "사과",
      checkedAnswer: "딸기",
    }));

    it("'오답' 마크와 '정답' 마크가 함께 표시됩니다", () => {
      const { getByText } = createQuestion();

      expect(getByText("오답")).toBeInTheDocument();
      expect(getByText("정답")).toBeInTheDocument();
    });
  });
});
