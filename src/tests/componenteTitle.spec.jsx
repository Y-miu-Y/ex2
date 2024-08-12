import { StudyRecord } from "../StudyRecord";
import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

describe("Title Test", () => {
  it("タイトルが学習記録一覧であること", () => {
    // testId(title)を指定して取得
    render(<StudyRecord />);
    setTimeout(() => {
    // 読み込みに2秒待機
      const title = screen.getByTestId("title");
      expect(title).toHaveTextContent("学習記録一覧");
    }, 2 * 1000);
  });
});
