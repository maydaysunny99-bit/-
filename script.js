/* ===============================
   角色資料設定
   =============================== */

// 所有可以被比較的角色
// name：角色名稱
// rating：Elo 分數（初始一樣）
const characters = [
{ name: "童子切安綱 剥落", rating: 1000 },
{ name: "三日月宗近", rating: 1000 },
{ name: "小狐丸", rating: 1000 },
{ name: "石切丸", rating: 1000 },
{ name: "岩融", rating: 1000 },
{ name: "今剣", rating: 1000 },
{ name: "大典太光世", rating: 1000 },
{ name: "ソハヤノツルキ", rating: 1000 },
{ name: "数珠丸恒次", rating: 1000 },
{ name: "にっかり青江", rating: 1000 },
{ name: "鬼丸国綱", rating: 1000 },
{ name: "鳴狐", rating: 1000 },
{ name: "一期一振", rating: 1000 },
{ name: "鯰尾藤四郎", rating: 1000 },
{ name: "骨喰藤四郎", rating: 1000 },
{ name: "平野藤四郎", rating: 1000 },
{ name: "厚藤四郎", rating: 1000 },
{ name: "後藤藤四郎", rating: 1000 },
{ name: "信濃藤四郎", rating: 1000 },
{ name: "前田藤四郎", rating: 1000 },
{ name: "秋田藤四郎", rating: 1000 },
{ name: "博多藤四郎", rating: 1000 },
{ name: "乱藤四郎", rating: 1000 },
{ name: "五虎退", rating: 1000 },
{ name: "薬研藤四郎", rating: 1000 },
{ name: "包丁藤四郎", rating: 1000 },
{ name: "大包平", rating: 1000 },
{ name: "鶯丸", rating: 1000 },
{ name: "明石国行", rating: 1000 },
{ name: "蛍丸", rating: 1000 },
{ name: "愛染国俊", rating: 1000 },
{ name: "千子村正", rating: 1000 },
{ name: "蜻蛉切", rating: 1000 },
{ name: "物吉貞宗", rating: 1000 },
{ name: "太鼓鐘貞宗", rating: 1000 },
{ name: "亀甲貞宗", rating: 1000 },
{ name: "燭台切光忠", rating: 1000 },
{ name: "大般若長光", rating: 1000 },
{ name: "小竜景光", rating: 1000 },
{ name: "江雪左文字", rating: 1000 },
{ name: "宗三左文字", rating: 1000 },
{ name: "小夜左文字", rating: 1000 },
{ name: "加州清光", rating: 1000 },
{ name: "大和守安定", rating: 1000 },
{ name: "歌仙兼定", rating: 1000 },
{ name: "和泉守兼定", rating: 1000 },
{ name: "陸奥守吉行", rating: 1000 },
{ name: "山姥切国広", rating: 1000 },
{ name: "山伏国広", rating: 1000 },
{ name: "堀川国広", rating: 1000 },
{ name: "蜂須賀虎徹", rating: 1000 },
{ name: "浦島虎徹", rating: 1000 },
{ name: "長曽祢虎徹", rating: 1000 },
{ name: "髭切", rating: 1000 },
{ name: "膝丸", rating: 1000 },
{ name: "大倶利伽羅", rating: 1000 },
{ name: "へし切長谷部", rating: 1000 },
{ name: "不動行光", rating: 1000 },
{ name: "獅子王", rating: 1000 },
{ name: "小烏丸", rating: 1000 },
{ name: "抜丸", rating: 1000 },
{ name: "同田貫正国", rating: 1000 },
{ name: "鶴丸国永", rating: 1000 },
{ name: "太郎太刀", rating: 1000 },
{ name: "次郎太刀", rating: 1000 },
{ name: "日本号", rating: 1000 },
{ name: "御手杵", rating: 1000 },
{ name: "巴形薙刀", rating: 1000 },
{ name: "毛利藤四郎", rating: 1000 },
{ name: "篭手切江", rating: 1000 },
{ name: "謙信景光", rating: 1000 },
{ name: "小豆長光", rating: 1000 },
{ name: "日向正宗", rating: 1000 },
{ name: "静形薙刀", rating: 1000 },
{ name: "南泉一文字", rating: 1000 },
{ name: "千代金丸", rating: 1000 },
{ name: "山姥切長義", rating: 1000 },
{ name: "豊前江", rating: 1000 },
{ name: "祢々切丸", rating: 1000 },
{ name: "白山吉光", rating: 1000 },
{ name: "南海太郎朝尊", rating: 1000 },
{ name: "肥前忠広", rating: 1000 },
{ name: "北谷菜切", rating: 1000 },
{ name: "桑名江", rating: 1000 },
{ name: "水心子正秀", rating: 1000 },
{ name: "源清麿", rating: 1000 },
{ name: "松井江", rating: 1000 },
{ name: "山鳥毛", rating: 1000 },
{ name: "古今伝授の太刀", rating: 1000 },
{ name: "地蔵行平", rating: 1000 },
{ name: "治金丸", rating: 1000 },
{ name: "日光一文字", rating: 1000 },
{ name: "太閤左文字", rating: 1000 },
{ name: "五月雨江", rating: 1000 },
{ name: "大千鳥十文字槍", rating: 1000 },
{ name: "泛塵", rating: 1000 },
{ name: "一文字則宗", rating: 1000 },
{ name: "村雲江", rating: 1000 },
{ name: "姫鶴一文字", rating: 1000 },
{ name: "福島光忠", rating: 1000 },
{ name: "七星剣", rating: 1000 },
{ name: "丙子椒林剣", rating: 1000 },
{ name: "稲葉江", rating: 1000 },
{ name: "笹貫", rating: 1000 },
{ name: "人間無骨", rating: 1000 },
{ name: "八丁念仏", rating: 1000 },
{ name: "石田正宗", rating: 1000 },
{ name: "実休光忠", rating: 1000 },
{ name: "京極正宗", rating: 1000 },
{ name: "孫六兼元", rating: 1000 },
{ name: "後家兼光", rating: 1000 },
{ name: "火車切", rating: 1000 },
{ name: "富田江", rating: 1000 },
{ name: "大慶直胤", rating: 1000 },
{ name: "九鬼正宗", rating: 1000 },
{ name: "雲生", rating: 1000 },
{ name: "道誉一文字", rating: 1000 },
{ name: "雲次", rating: 1000 },
{ name: "面影", rating: 1000 },
{ name: "古備前信房", rating: 1000 },
{ name: "俱利伽羅江", rating: 1000 },
{ name: "三郎國宗", rating: 1000 },
{ name: "安宅切", rating: 1000 },
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
