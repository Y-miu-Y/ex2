import { StudyRecord } from "../StudyRecord";
import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Title Test", () => {
  it("フォームに入力・削除ができること", () => {
    // https://qiita.com/yassii_dev/items/dd83b9fb7230b4e7b9b9を参照
    const { user } = () =>{
      const user = userEvent.setup();
      return {
        user,
        ...render(<StudyRecord />)
      }
    };
    setTimeout( async () => {
      // 読み込みに2秒待機

      // フォームに学習内容と時間を入力して登録ボタンを押すと新たに記録が追加されている
      // 数が1つ増えていることをテストする

      // レコード数をカウント
      const recordTable = screen.getByTestId("recordTable");
      const tableRowsBefore = recordTable.childElementCount;

      const testTitle = "テスト用学習記録";

      // 文字入力フォームに入力
      const inputTitle = screen.getByTestId("inputTitle");
      await user.type(inputTitle, testTitle);

      // 時間入力フォームに入力
      const inputTime = screen.getByTestId("inputTime");
      await user.type(inputTime, "12");

      // 時間入力フォームに入力
      const buttonAddRecord = screen.getByTestId("buttonAddRecord");
      buttonAddRecord.click();

      const tableRowsAfterAdd = recordTable.childElementCount;

      expect(tableRowsAfterAdd).toBe( (tableRowsBefore + 1) );

      // 削除ボタンを押すと学習記録が削除される
      // 数が1つ減っていることをテストする
      const addedRow = screen.getByRole("cell", {name: testTitle}).parentNode;
      const deleteButon = addedRow.lastElementChild;
      // 削除ボタン押下
      buttonAddRecord.click();

      // 削除後のテーブル要素数取得
      const tableRowsAfterAddDelete = recordTable.childElementCount;

      // カウント
      expect(tableRowsAfterAddDelete).toBe( (tableRowsAfterAdd - 1 ));

    }, 2 * 1000);
  });

  

});
