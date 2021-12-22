import App from "./App";
import { MemoryRouter } from "react-router-dom";

import { fireEvent, render, waitFor } from "@testing-library/react";

import useSetQuestion from "./hooks/useSetQuestion";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate() {
    return mockNavigate;
  },
}));

jest.mock("./hooks/useSetQuestion");

describe("App", () => {
  useSetQuestion.mockImplementation(() => ({
    isLoading: given.isLoading,
    isSuccess: given.isSuccess,
  }));

  const createApp = () =>
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

  it("퀴즈 풀이 설명을 표시합니다", () => {
    const { getByText } = createApp();

    expect(
      getByText("지금부터 랜덤 퀴즈 풀이를 시작합니다")
    ).toBeInTheDocument();

    expect(
      getByText("준비가 되셨다면 아래의 버튼을 클릭해 주세요!")
    ).toBeInTheDocument();
  });

  it("퀴즈 풀기 버튼을 표시합니다", () => {
    const { getByRole } = createApp();

    expect(
      getByRole("button", {
        name: "퀴즈 풀기",
      })
    ).toBeInTheDocument();
  });

  context("isSuccess가 true인 경우", () => {
    given("isSuccess", () => true);

    it("퀴즈 풀기 버튼을 클릭하면 '/question/1'로 이동합니다", async () => {
      const { getByRole } = createApp();

      const button = getByRole("button", {
        name: "퀴즈 풀기",
      });

      fireEvent.click(button);

      await waitFor(() => {
        expect(mockNavigate).toBeCalledWith("/question/1");
      });
    });
  });

  context("isSuccess가 false인 경우", () => {
    given("isSuccess", () => false);

    it("퀴즈 풀기 버튼을 클릭하면 '/question/1'로 이동하지 않습니다", async () => {
      const { getByRole } = createApp();

      const button = getByRole("button", {
        name: "퀴즈 풀기",
      });

      fireEvent.click(button);

      await waitFor(() => {
        expect(mockNavigate).not.toBeCalled();
      });
    });
  });

  context("isLoading이 true인 경우", () => {
    given("isLoading", () => true);

    it("로딩모달을 화면에 표시합니다", async () => {
      const { queryByText } = createApp();

      expect(queryByText("로딩모달")).toBeInTheDocument();
    });
  });

  context("isLoading이 false인 경우", () => {
    given("isLoading", () => false);

    it("로딩모달을 화면에 표시하지 않습니다", async () => {
      const { queryByText } = createApp();

      expect(queryByText("로딩모달")).not.toBeInTheDocument();
    });
  });
});
