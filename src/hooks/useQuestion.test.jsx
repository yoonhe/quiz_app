import { act, renderHook } from "@testing-library/react-hooks";

import * as status from "../constants/status";

import QUESTION from "../fixtures/question";

import useQuestion from "./useQuestion";

import getQuestion from "../utils/getQuestion";

jest.mock("../utils/getQuestion");

describe("useQuestion", () => {
  getQuestion.mockImplementation(() => given.question);

  context("데이터가 있는 경우", () => {
    given("question", () => QUESTION);

    it("question 데이터를 반환합니다", () => {
      const { result } = renderHook(() => useQuestion({ id: 1 }));

      expect(result.current.question).toEqual(QUESTION);
    });

    it("handleChange 함수를 사용해 상태를 변경할 수 있습니다", () => {
      const { result } = renderHook(() => useQuestion({ id: 1 }));

      expect(result.current.question.checkedAnswer).toEqual(
        QUESTION.checkedAnswer
      );

      act(() => {
        result.current.handleChange({
          ...QUESTION,
          checkedAnswer: "선택한 정답",
        });
      });

      expect(result.current.question.checkedAnswer).toBe("선택한 정답");
    });
  });

  context("데이터가 없는 경우", () => {
    given("question", () => null);

    it("NONE_DATA 룰 반환합니다", () => {
      const { result } = renderHook(() => useQuestion({ id: 1 }));

      expect(result.current.question).toBe(status.NONE_DATA);
    });
  });
});
