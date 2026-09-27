// 1-08. 객체 만들기, 클래스

class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const item = {
  name: "스웨터",
  price: 30_000,
};

const user1 = new User("chris123@google.com", "1992-03-21");
const user2 = new User("jerry99@google.com", "1995-07-19");

console.log(user1.email);    // 출력: chris123@google.com
console.log(user2.birthdate); // 출력: 1995-07-19

user1.buy(item); // 출력: chris123@google.com buys 스웨터
user2.buy(item); // 출력: jerry99@google.com buys 스웨터

// ─────────────────────────────────────
// 메모리 효율 확인 (Factory function과 비교)
// ─────────────────────────────────────
console.log(user1.buy === user2.buy); // 출력: true (prototype 공유)
