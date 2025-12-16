/* ===============================
   角色資料設定
   =============================== */

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
   初始化狀態
   =============================== */

characters.forEach(c => {
  c.wins = 0;
  c.losses = 0;
});

let rounds = 0;
let currentPair = null;
let pairingQueue = [];
const playedPairs = new Set();

/* ===============================
   工具
   =============================== */

function pairKey(a, b) {
  return [a.name, b.name].sort().join("||");
}

/* ===============================
   Elo（無平手）
   =============================== */

function updateElo(winner, loser) {
  const K = 24;
  const expected =
    1 / (1 + Math.pow(10, (loser.rating - winner.rating) / 400));

  winner.rating += K * (1 - expected);
  loser.rating += K * (0 - (1 - expected));
}

/* ===============================
   瑞士制配對（核心）
   =============================== */

function generatePairings() {

  const sorted = [...characters].sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    return b.rating - a.rating;
  });

  pairingQueue = [];
  const used = new Set();

  for (let i = 0; i < sorted.length; i++) {
    const a = sorted[i];
    if (used.has(a)) continue;

    for (let j = i + 1; j < sorted.length; j++) {
      const b = sorted[j];
      if (used.has(b)) continue;

      const key = pairKey(a, b);
      if (!playedPairs.has(key)) {
        pairingQueue.push([a, b]);
        used.add(a);
        used.add(b);
        break;
      }
    }
  }
}

/* ===============================
   下一題
   =============================== */

function nextBattle() {

  if (pairingQueue.length === 0) {
    generatePairings();
  }

  if (pairingQueue.length === 0) {
    showResult();
    return;
  }

  rounds++;
  document.getElementById("progress").textContent =
    `第 ${rounds} 次比較`;

  const [a, b] = pairingQueue.shift();
  currentPair = { a, b };
  playedPairs.add(pairKey(a, b));

  document.getElementById("left").textContent = a.name;
  document.getElementById("right").textContent = b.name;
}

/* ===============================
   使用者選擇
   =============================== */

function resolveBattle(side) {
  if (!currentPair) return;

  const { a, b } = currentPair;
  const winner = side === "left" ? a : b;
  const loser  = side === "left" ? b : a;

  winner.wins++;
  loser.losses++;
  updateElo(winner, loser);

  nextBattle();
}

/* ===============================
   顯示結果
   =============================== */

function showResult() {
  document.getElementById("battle").hidden = true;
  document.getElementById("result").hidden = false;

  const sorted = [...characters].sort((a, b) => b.rating - a.rating);
  const list = document.getElementById("ranking");
  list.innerHTML = "";

  sorted.forEach(c => {
    const li = document.createElement("li");
    li.textContent =
      `${c.name}（勝:${c.wins} 敗:${c.losses} 分:${Math.round(c.rating)}）`;
    list.appendChild(li);
  });
}

/* ===============================
   啟動
   =============================== */

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("left")
    .addEventListener("click", () => resolveBattle("left"));

  document.getElementById("right")
    .addEventListener("click", () => resolveBattle("right"));

  generatePairings();
  nextBattle();
});

  generatePairings();
  nextBattle();
});
