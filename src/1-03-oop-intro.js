// 1-03. 객체 지향 프로그래밍

// ─────────────────────────────────────
// 절차 지향 방식
// ─────────────────────────────────────
// 사용자 관련 변수들
let userEmail = "chris123@google.com";
let userBirthdate = "1992-03-21";
let userEmail2 = "jerry99@google.com";
let userBirthdate2 = "1995-07-19";

// 상품 관련 변수들
let itemName = "스웨터";
let itemPrice = 30_000;

// 구매 처리 함수
function buyItem(email, name) {
  console.log(`${email} buys ${name}`);
}

// 순서에 따라 실행
buyItem(userEmail, itemName); // 출력: chris123@google.com buys 스웨터
buyItem(userEmail2, itemName); // 출력: jerry99@google.com buys 스웨터

// ─────────────────────────────────────
// 객체 지향 방식
// ─────────────────────────────────────
// user 객체: 사용자와 관련된 상태와 동작이 모두 안에 묶여 있습니다
const user = {
  email: "chris123@google.com",
  birthdate: "1992-03-21",
  buy(item) {
    console.log(`${user.email} buys ${item.name}`);
  },
};

// item 객체: 상품과 관련된 상태가 안에 묶여 있습니다
const item = {
  name: "스웨터",
  price: 30_000,
};

// 객체끼리 상호작용: user 객체가 item 객체를 구매합니다
user.buy(item); // 출력: chris123@google.com buys 스웨터
