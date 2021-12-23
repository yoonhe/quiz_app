import { render } from "@testing-library/react";

import Question from "./Question";

import useQuestion from "./hooks/useQuestion";

import QUESTION from "./fixtures/question";

jest.mock("./hooks/useQuestion");

describe("Question", () => {
  useQuestion.mockImplementation(() => ({
    question: given.question || QUESTION,
  }));

  it("문항을 화면에 표시합니다", () => {
    const { getByText } = render(<Question />);

    expect(getByText(QUESTION.title)).toBeInTheDocument();
  });

  it("답안을 화면에 표시합니다", () => {
    const { getByRole } = render(<Question />);

    QUESTION.answers.forEach((answer) => {
      expect(
        getByRole("button", {
          name: answer,
        })
      ).toBeInTheDocument();
    });
  });
});
