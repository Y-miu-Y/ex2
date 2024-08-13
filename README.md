<div><img src="./docs/library-image.png" alt="本棚のイメージ(Stable Diffusionで生成)"/></div>

# StudyRecoder

## 概要

プログラミングスクール**JISOU**の課題として作成しました。

（JISOUのHP：https://projisou.jp/ ）

学習した内容と時間を記録できます。

## 機能

* 学習した内容および時間の登録
* 登録した学習記録をテーブル表示
* 登録した学習記録を削除
* 学習記録の登録時の未入力チェック

## 主な使用技術

<img src="https://img.shields.io/badge/-Javascript-000000.svg?logo=javascript&style=plastic">
<img src="https://img.shields.io/badge/-React-000000.svg?logo=react&style=plastic">
<img src="https://img.shields.io/badge/-Firebase-000000.svg?logo=firebase&style=plastic">
<img src="https://img.shields.io/badge/-Jest-000000.svg?logo=jest&style=plastic">
<img src="https://img.shields.io/badge/-Npm-000000.svg?logo=npm&style=plastic">

# 使い方

## 前提

* supabaseのアカウント登録を行っていること
* supabaseに以下テーブル定義のデータが登録されていること

| カラム名 | 型 | default | other |
| --- | --- | --- | --- |
| id | uuid | gen_random_uuid() | primary key |
| title | varchar | - | not null |
| time | integer | - | not null |
| created_at | int4 | now() | not null |

プロジェクトルートの以下にcreate tableのSQLファイルがあります。

```
./sql/createTable_study-record.sql
```

## ローカルでの環境設定および起動の方法



### 1. `.env`ファイルで環境変数を定義

``` bash
touch .env
```

上記ファイルを任意のエディタで開き、以下の2行を追加する

``` ini
VITE_SUPABASE_URL=${supabaseのProject URL}
VITE_SUPABASE_ANON_KEY=${supabaseのProject API keys > anon public}
```

supabaseの各種設定に関しては公式ドキュメントを参照してください。
https://supabase.com/docs/guides/api/api-keys

### 2. npmでの実行

```bash
npm i
npm run dev
```