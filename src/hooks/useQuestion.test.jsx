import { act, renderHook } from "@testing-library/react-hooks";

import * as status from "../constants/status";

import QUESTION from "../fixtures/question";
import QUESTIONS from "../fixtures/questions";

import useQuestion from "./useQuestion";

import getQuestion from "../utils/getQuestion";
import * as storage from "../utils/storage";

jest.mock("../utils/getQuestion");
jest.mock("../utils/storage");

describe("useQuestion", () => {
  const createHooks = () => renderHook(() => useQuestion({ id: 1 }));

  getQuestion.mockImplementation(() => given.question);

  storage.getItem.mockImplementation(() => QUESTIONS);

  context("데이터가 있는 경우", () => {
    given("question", () => QUESTION);

    it("question 데이터를 반환합니다", () => {
      const { result } = createHooks();

      expect(result.current.question).toEqual(QUESTION);
    });

    it("handleChange 함수를 사용해 상태를 변경할 수 있습니다", () => {
      const { result } = createHooks();

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
      const { result } = createHooks();

      expect(result.current.question).toBe(status.NONE_DATA);
    });
  });

  context("답안이 선택된 경우", () => {
    given("question", () => ({
      ...QUESTION,
      checkedAnswer: "",
    }));

    it("로컬스토리지의 상태를 업데이트 합니다", () => {
      const { result } = createHooks();

      act(() => {
        result.current.handleChange({
          ...QUESTION,
          checkedAnswer: "선택한 정답",
        });
      });

      expect(storage.updateItem).toBeCalled();
    });
  });

  context("답안이 선택되지 않은 경우", () => {
    given("question", () => ({
      ...QUESTION,
      checkedAnswer: "",
    }));

    it("로컬스토리지의 상태를 업데이트 하지 않습니다", () => {
      expect(storage.updateItem).not.toBeCalled();
    });
  });
});
