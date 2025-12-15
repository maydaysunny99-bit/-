/* ===============================
   角色資料設定
   =============================== */

// 所有可以被比較的角色
// name：角色名稱
// rating：Elo 分數（初始一樣）
const characters = [
  { name: "角色A", rating: 1000 },
  { name: "角色B", rating: 1000 },
  { name: "角色C", rating: 1000 },
  { name: "角色D", rating: 1000 }
];

/* ===============================
   全域變數
   =============================== */

// 左邊目前顯示的角色
let leftChar;

// 右邊目前顯示的角色
let rightChar;

// 已經進行的題目數
let rounds = 0;

// 總共要問幾題
const MAX_ROUNDS = 20;

/* ===============================
   Elo 分數計算
   =============================== */

// winner：被選中的角色
// loser：沒被選中的角色
function updateElo(winner, loser) {

  // K 值，影響分數變動幅度
  const K = 32;

  // 計算 winner 原本「理論上」的勝率
  const expectedWin =
    1 / (1 + Math.pow(10, (loser.rating - winner.rating) / 400));

  // 勝者加分
  winner.rating += K * (1 - expectedWin);

  // 敗者扣分
  loser.rating += K * (0 - (1 - expectedWin));
}

/* ===============================
   產生下一題（二選一）
   =============================== */

function nextBattle() {

  // 隨機選一個角色當左邊
  let i = Math.floor(Math.random() * characters.length);

  // 宣告右邊角色索引
  let j;

  // 確保左右不是同一個角色
  do {
    j = Math.floor(Math.random() * characters.length);
  } while (i === j);

  // 設定目前這一題的左右角色
  leftChar = characters[i];
  rightChar = characters[j];

  // 把角色名稱顯示到左邊按鈕
  document.getElementById("left").textContent = leftChar.name;

  // 把角色名稱顯示到右邊按鈕
  document.getElementById("right").textContent = rightChar.name;
}

/* ===============================
   使用者選擇角色
   =============================== */

// 左邊按鈕被點擊
document.getElementById("left").onclick = function () {
  choose(leftChar, rightChar);
};

// 右邊按鈕被點擊
document.getElementById("right").onclick = function () {
  choose(rightChar, leftChar);
};
