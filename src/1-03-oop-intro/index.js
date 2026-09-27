// 1-03. 객체 지향 프로그래밍

// ─────────────────────────────────────
// 절차 지향 방식
// ─────────────────────────────────────
let userEmail = "chris123@google.com";
let userBirthdate = "1992-03-21";

let itemName = "스웨터";
let itemPrice = 30_000;

function buyItem(email, name) {
  console.log(`${email} buys ${name}`);
}

buyItem(userEmail, itemName); // 출력: chris123@google.com buys 스웨터

// ─────────────────────────────────────
// 객체 지향 방식
// ─────────────────────────────────────
const user = {
  email: "chris123@google.com",
  birthdate: "1992-03-21",
  buy(item) {
    console.log(`${user.email} buys ${item.name}`);
  },
};

const item = {
  name: "스웨터",
  price: 30_000,
};

user.buy(item); // 출력: chris123@google.com buys 스웨터
