# KUPC's Webpage
## URL
https://www.kupc.jp/ で閲覧できます \
ドメインを変更する場合は `public/CNAME` を編集してください


## Setup
```
npm install
```


## How to update
基本的には, `rect-dev` ブランチの `src/data.js`, `src/OnsiteInfo.js`, `src/OnsiteInfo.less` を編集してください \
`npm start` を叩くと, http://localhost:3000/ でプレビューできます


## Test
`npm test` を叩くと, `src` 以下にある `*.test.js` が実行されます \
`src/.../*.js` 用のテストファイル名は `src/.../*.test.js` としてください

`gh-pages` 以外のブランチが更新されると`werker`(CI)が走り, 結果を[ここ](https://app.wercker.com/drafear/kupc-web/runs)で閲覧できます \
ただし, 閲覧には権限が必要なため, [@drafear](https://twitter.com/drafear) に権限を要求してください


## Deploy
`master` ブランチが更新されると`werker`(CI)が走り, 自動的にテスト, ビルドした後`gh-pages`ブランチにpushされます


## Contact
不明な点やバグなどがございましたら [@drafear](https://twitter.com/drafear) までご質問ください
