const moves = document.querySelector(".moves");
const time = document.querySelector(".time");
const grid = document.querySelector(".grid table");
const colors = document.querySelector(".colors");
const h2 = document.querySelector("h2");
let movesToEnd = 0;
let turns = 0;

boxs = "";
colorList = [
  "#e5e5e5",
  "#cccccc",
  "#bdbdbd",
  "#1976d2",
  "#2196f3",
  "#4caf50",
  "#fbc02d",
  "#ef5350",
  "#424242",
  "#212121",
];

function random(a, b) {
  return Math.floor(Math.random() * (b + 1 - a) + a);
}

for (let i = 1; i <= 15; i++) {
  boxs += "<tr>";
  for (let j = 1; j <= 15; j++) {
    boxs += `<td class="all r${i} c${j}"> ${random(1, 10)} </td>`;
    movesToEnd++;
  }
  boxs += "</tr>";
}
grid.innerHTML = boxs;

colorsBoxs = "";
for (let i = 1; i <= 10; i++) {
  colorsBoxs += `<div class="colorBox cb${i}" style="background: ${
    colorList[i - 1]
  }">${i}</div>`;
}

colors.innerHTML = colorsBoxs;

let activeNr;
let activeColor;

colorAll = document.querySelectorAll(".colorBox");
colorAll.forEach((el) => {
  el.onclick = () => {
    colorAll.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
    activeNr = Number(el.classList[1].charAt(2) + el.classList[1].charAt(3));
    activeColor = colorList[activeNr - 1];
    console.log(activeNr, activeColor);
  };
});

tds = document.querySelectorAll(".all");

function finish() {
  h2.textContent = "I am impressive";
}

function move() {}
tds.forEach((el) => {
  el.onmousedown = () => {
    if (activeNr == el.textContent) {
      el.textContent = "";
      movesToEnd--;
      if (movesToEnd == 0) finish();
      turns++;
      moves.textContent = `${turns} turns`;
      el.style.background = activeColor;
      el.style.pointerEvents = "none";
    } else if (activeNr > 0 && activeNr < 11) {
      moves.textContent = `${turns} turns`;
      el.style.background = activeColor;
      el.style.color = "rgb(19, 23, 83)";
      el.style.textShadow = "0 0 5px white";
      turns++;
    }
  };
});

clock();

let h = 0,
  m = 0,
  s = 0;
function zero(a) {
  if (a < 10) return "0" + a;
  else return a;
}

function clock() {
  setInterval(() => {
    s++;
    if (s == 60) {
      m++;
      s = 0;
    }
    if (m == 60) {
      h++;
      m = 0;
    }
    time.textContent = `${zero(h)}:${zero(m)}:${zero(s)}`;
  }, 1000);
}

let key;
document.body.onkeydown = (el) => {
  if (Number(el.key) >= 0 && Number(el.key) < 10) {
    if (Number(el.key) == 0) key = 10;
    else key = Number(el.key);
    colorAll.forEach((all) => all.classList.remove("active"));
    element = document.querySelector(`.cb${key}`);
    element.classList.add("active");
    activeNr = Number(key);
    activeColor = colorList[activeNr - 1];
    console.log(activeNr, activeColor);
  }
};
