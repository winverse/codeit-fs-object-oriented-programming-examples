// 1-05. 객체 만들기, 객체 리터럴

// ─────────────────────────────────────
// 기본 객체 리터럴
// ─────────────────────────────────────
const user = {
  email: "chris123@google.com",
  birthdate: "1992-03-21",
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  },
};

const item = {
  name: "스웨터",
  price: 30_000,
};

console.log(user.email); // 출력: chris123@google.com
console.log(user.birthdate); // 출력: 1992-03-21
user.buy(item); // 출력: chris123@google.com buys 스웨터

// ─────────────────────────────────────
// this를 활용한 함수 재사용
// ─────────────────────────────────────
function introduce() {
  // 어떤 객체의 메서드로 호출하느냐에 따라 그 객체의 이름을 출력합니다
  console.log(`Hello, I am ${this.name}`);
}

const user1 = { name: "Chris", introduce: introduce };
const user2 = { name: "Alice", introduce: introduce };

user1.introduce(); // 출력: Hello, I am Chris
user2.introduce(); // 출력: Hello, I am Alice
