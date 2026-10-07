// 2-14. instanceof 연산자

// 2장 09. 상속의 User와 PremiumUser
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

// User를 상속합니다
class PremiumUser extends User {
  #level;

  constructor(email, birthdate, level) {
    super(email, birthdate); // 부모 클래스의 constructor를 실행합니다
    this.#level = level;
  }

  getLevel() {
    return this.#level;
  }

  streamMusicForFree() {
    console.log(
      `Free music streaming for ${this.getEmail()}`,
    );
  }
}

// ─────────────────────────────────────
// 기본 사용법
// ─────────────────────────────────────
const user1 = new User("chris123@google.com", "1992-03-21");
const user2 = new User("rachel@google.com", "1988-05-16");
const user3 = new User("brian@google.com", "2005-11-25");
const pUser1 = new PremiumUser(
  "niceguy@google.com",
  "1989-12-07",
  3,
);
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
  console.log(user instanceof PremiumUser);
});
// 출력:
// false
// true
// false
// true
// false
// true

users.forEach((user) => {
  if (user instanceof PremiumUser) {
    user.streamMusicForFree();
  }
});
// 출력:
// Free music streaming for niceguy@google.com
// Free music streaming for helloMike@google.com
// Free music streaming for aliceKim@google.com

// ─────────────────────────────────────
// 부모 클래스에 대한 instanceof 결과
// ─────────────────────────────────────
users.forEach((user) => {
  console.log(user instanceof User);
});
// 출력:
// true
// true
// true
// true
// true
// true
