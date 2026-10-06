// 2-03. 이름 짓기 비교

// ✅ 이름이 명확한 코드 → 코드만 봐도 의미를 알 수 있습니다
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const item = { name: "스웨터", price: 30_000 };
const user1 = new User("chris123@google.com", "1992-03-21");
user1.buy(item); // 출력: chris123@google.com buys 스웨터
