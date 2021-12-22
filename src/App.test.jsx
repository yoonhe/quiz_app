import App from "./App";

import { render } from "@testing-library/react";

describe("App", () => {
  const createApp = () => render(<App />);

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
});
