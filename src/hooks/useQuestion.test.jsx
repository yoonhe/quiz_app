import { renderHook } from "@testing-library/react-hooks";

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
  });

  context("데이터가 없는 경우", () => {
    given("question", () => null);

    it("NONE_DATA 룰 반환합니다", () => {
      const { result } = renderHook(() => useQuestion({ id: 1 }));

      expect(result.current.question).toBe(status.NONE_DATA);
    });
  });
});
