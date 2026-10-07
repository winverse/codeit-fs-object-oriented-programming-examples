// 2-06. 캡슐화

// ─────────────────────────────────────
// 프로퍼티를 그대로 공개한 User
// ─────────────────────────────────────
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const user1 = new User("chris123@google.com", "1992-03-21");

user1.email = "chris robert"; // 이메일 형식이 아닌 값을 대입하는 실수
console.log(user1.email); // 출력: chris robert
