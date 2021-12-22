import { waitFor } from "@testing-library/react";

import { renderHook, act } from "@testing-library/react-hooks";

import useSetQuestion from "./useSetQuestion";

describe("useSetQuestions", () => {
  it("isLoading, isSuccess, handleSetQuestions를 반환합니다", () => {
    const { result } = renderHook(() => useSetQuestion());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(typeof result.current.handleSetQuestions).toBe("function");
  });

  it("handleSetQuestions 실행을 통해 로딩상태와 성공상태를 변경합니다", async () => {
    const { result } = renderHook(() => useSetQuestion());

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeFalsy();

    act(() => {
      result.current.handleSetQuestions();
    });

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.isSuccess).toBeTruthy();
    });
  });
});
