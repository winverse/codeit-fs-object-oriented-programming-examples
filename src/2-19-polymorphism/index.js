// 2-19. 다형성

// 2장 11. 상속의 User
class User {
  #email;
  #birthdate;

  constructor(email, birthdate) {
    this.#email = email;
    this.#birthdate = birthdate;
  }

  getEmail() {
    return this.#email;
  }
  getBirthdate() {
    return this.#birthdate;
  }

  buy(item) {
    console.log(`${this.getEmail()} buys ${item.name}`);
  }
}

// ─────────────────────────────────────
// 메서드 오버라이딩
// ─────────────────────────────────────
class PremiumUser extends User {
  #level;

  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.#level = level;
  }

  getLevel() {
    return this.#level;
  }

  buy(item) {
    // 부모의 buy를 오버라이딩합니다
    console.log(
      `${this.getEmail()} buys ${item.name} with a 5% discount`,
    );
  }

  streamMusicForFree() {
    console.log(
      `Free music streaming for ${this.getEmail()}`,
    );
  }
}

const item = { name: "스웨터", price: 30_000 };
const user1 = new User("chris123@google.com", "1992-03-21");
const pUser1 = new PremiumUser(
  "niceguy@google.com",
  "1989-12-07",
  3,
);

user1.buy(item); // 출력: chris123@google.com buys 스웨터
pUser1.buy(item); // 출력: niceguy@google.com buys 스웨터 with a 5% discount

// ─────────────────────────────────────
// 동일한 메서드 이름이 필요한 이유
// ─────────────────────────────────────
// ❌ 다른 이름으로 구현한 경우
class PremiumUserWithSeparateMethod extends User {
  #level;

  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.#level = level;
  }

  getLevel() {
    return this.#level;
  }

  buyWithDiscount(item) {
    // ← buy가 아닌 다른 이름
    console.log(
      `${this.getEmail()} buys ${item.name} with a 5% discount`,
    );
  }

  streamMusicForFree() {
    console.log(
      `Free music streaming for ${this.getEmail()}`,
    );
  }
}

const usersWithSeparateMethods = [
  new User("chris123@google.com", "1992-03-21"),
  new PremiumUserWithSeparateMethod(
    "niceguy@google.com",
    "1989-12-07",
    3,
  ),
  new User("rachel@google.com", "1988-05-16"),
  new PremiumUserWithSeparateMethod(
    "helloMike@google.com",
    "1990-09-15",
    2,
  ),
];

// 이 배열을 처리하려면 타입별로 나눠서 호출해야 합니다
usersWithSeparateMethods
  .filter(
    (user) => user instanceof PremiumUserWithSeparateMethod,
  )
  .forEach((user) => {
    user.buyWithDiscount(item); // 프리미엄 전용 메서드
  });
// 출력:
// niceguy@google.com buys 스웨터 with a 5% discount
// helloMike@google.com buys 스웨터 with a 5% discount

usersWithSeparateMethods
  // 프리미엄 사용자도 User의 인스턴스이므로 제외 조건 사용
  .filter(
    (user) =>
      !(user instanceof PremiumUserWithSeparateMethod),
  )
  .forEach((user) => {
    user.buy(item); // 일반 사용자 메서드
  });
// 출력:
// chris123@google.com buys 스웨터
// rachel@google.com buys 스웨터

// ✅ 동일한 이름으로 오버라이딩한 경우
const user2 = new User("rachel@google.com", "1988-05-16");
const user3 = new User("brian@google.com", "2005-11-25");
const pUser2 = new PremiumUser(
  "helloMike@google.com",
  "1990-09-15",
  2,
);
const pUser3 = new PremiumUser(
  "aliceKim@google.com",
  "2001-07-22",
  5,
);

const users = [user1, pUser1, user2, pUser2, user3, pUser3];

users.forEach((user) => {
  user.buy(item); // 같은 코드지만 객체 타입에 따라 다르게 동작!
});
// 출력:
// chris123@google.com buys 스웨터
// niceguy@google.com buys 스웨터 with a 5% discount
// rachel@google.com buys 스웨터
// helloMike@google.com buys 스웨터 with a 5% discount
// brian@google.com buys 스웨터
// aliceKim@google.com buys 스웨터 with a 5% discount
