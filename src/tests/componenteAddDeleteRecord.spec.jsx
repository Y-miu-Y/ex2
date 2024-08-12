import { StudyRecord } from "../StudyRecord";
import React, { act } from "react";
import '@testing-library/jest-dom';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { jest } from '@jest/globals';



describe("", () => {
  const mockAdd = jest.fn().mockResolvedValue();
  const mockDelete = jest.fn().mockResolvedValue();
  const mockGet = jest.fn().mockResolvedValue(
    {
      id: "0",
      title: "テスト",
      time: 1,
      "created-at": "2024-01-01 00:00:00.000000"
    }
  );

  jest.mock("../utils/getStudyRecords", () => {
    return{
      getStudyRecords:()=>mockGet(),
    }});

  jest.mock("../utils/deleteStudyRecord", () => {
    return{
      deleteStudyRecord:()=>mockDelete(),
    }});

  jest.mock("../utils/addStudyRecord", () => {
    return{
      addStudyRecord:()=>mockAdd(),
    }});
  

  it("タイトルが学習記録一覧であること", async () => {
    // testId(title)を指定して取得
    render(<StudyRecord />);
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("学習記録一覧");
  });

  it("フォームに入力・削除ができること", async () => {
    render(<StudyRecord />);
    // フォームに学習内容と時間を入力して登録ボタンを押すと新たに記録が追加されている
    // 数が1つ増えていることをテストする

    // レコード数をカウント
    const recordTableRows = await screen.findAllByRole("row");
    const tableRowsBefore = recordTableRows.length;

    const testTitle = "テスト用学習記録";

    // 文字入力フォームに入力
    const inputTitle = await screen.findByTestId("inputTitle");
    await userEvent.type(inputTitle, testTitle);

    // 時間入力フォームに入力
    const inputTime = await screen.findByTestId("inputTime");
    await userEvent.type(inputTime, "12");

    // 登録ボタン押下
    const buttonAddRecord = await screen.findByTestId("buttonAddRecord");
    await buttonAddRecord.click();

    const recordTableRowsAfterAdd = await screen.findAllByRole("row");
    const afterAddCount = recordTableRowsAfterAdd.length;

    expect(afterAddCount).toBe( (tableRowsBefore + 1) );

    // 削除ボタンを押すと学習記録が削除される
    // 数が1つ減っていることをテストする
    const addedRow = (await screen.findAllByRole("cell", {name: testTitle}))[0].parentElement;
    const deleteButon = addedRow.lastElementChild.firstElementChild;
    // 削除ボタン押下
    await deleteButon.click();

    // 削除後のテーブル要素数取得
    const recordTableRowsAfterDelete = await screen.findAllByRole("row");
    const afterDeleteCount = recordTableRowsAfterDelete.length;

    // カウント
    expect(afterDeleteCount).toBe( (afterAddCount - 1 ));
  });

  it("フォームの未入力バリデーション", async() => {
    render(<StudyRecord />);Q
  
    // 読み込みに2秒待機

    // 入力をしないで登録を押すとエラーが表示される

    // 登録ボタンを押下
    const buttonAddRecord = await screen.findByTestId("buttonAddRecord");
    await buttonAddRecord.click();

    const errorMessage = await screen.findByTestId("errorMessage");

    expect(errorMessage).toHaveTextContent("入力されていない項目があります");

  });
});
