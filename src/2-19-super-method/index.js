// 2-19. 부모 클래스 메서드 재사용하기

// 2장 09. 상속의 User
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

class PremiumUser extends User {
  #level;
  #point;

  constructor(email, birthdate, level, point) {
    super(email, birthdate);
    this.#level = level;
    this.#point = point;
  }

  getLevel() {
    return this.#level;
  }

  getPoint() {
    return this.#point;
  }

  buy(item) {
    // 1. 부모의 buy 메서드를 그대로 실행합니다.
    super.buy(item);
    // 2. 그다음 포인트를 적립합니다.
    this.#point += item.price * 0.05;
  }

  streamMusicForFree() {
    console.log(
      `Free music streaming for ${this.getEmail()}`,
    );
  }
}

const item = { name: "스웨터", price: 30_000 };
const pUser1 = new PremiumUser(
  "chris123@google.com",
  "1992-03-21",
  3,
  0,
);

pUser1.buy(item); // 출력: chris123@google.com buys 스웨터 (부모 buy가 실행됨)
console.log(pUser1.getPoint()); // 출력: 1500 (30_000 * 0.05)
