import App from "./App";

import {
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate() {
    return mockNavigate;
  },
}));

describe("App", () => {
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
      getByText(
        "준비가 되셨다면 아래의 버튼을 클릭해 주세요!"
      )
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
