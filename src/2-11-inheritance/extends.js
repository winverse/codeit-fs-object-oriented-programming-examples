// 2-11. extends로 상속받기

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

const item = { name: "스웨터", price: 30_000 };
const pUser1 = new PremiumUser(
  "chris123@google.com",
  "1992-03-21",
  3,
);

pUser1.buy(item); // 출력: chris123@google.com buys 스웨터
pUser1.streamMusicForFree(); // 출력: Free music streaming for chris123@google.com
