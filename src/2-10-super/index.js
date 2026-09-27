// 2-10. super

class User {
  #email;
  #birthdate;

  constructor(email, birthdate) {
    this.#email = email;
    this.#birthdate = birthdate;
  }

  get email() {
    return this.#email;
  }

  get birthdate() {
    return this.#birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

class PremiumUser extends User {
  #level;

  constructor(email, birthdate, level) {
    // 1. 부모 클래스의 constructor를 먼저 호출해 email, birthdate 값을 그대로 넘깁니다.
    super(email, birthdate);
    // 2. 그다음 자식 클래스의 고유 상태를 설정합니다.
    this.#level = level;
  }

  get level() {
    return this.#level;
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

const item = { name: "스웨터", price: 30_000 };
const pUser1 = new PremiumUser(
  "chris123@google.com",
  "1992-03-21",
  3,
);

console.log(pUser1.email); // 출력: chris123@google.com (부모 클래스의 constructor가 설정)
console.log(pUser1.birthdate); // 출력: 1992-03-21 (부모 클래스의 constructor가 설정)
console.log(pUser1.level); // 출력: 3 (자식 클래스의 constructor가 설정)
pUser1.buy(item); // 출력: chris123@google.com buys 스웨터 (부모에서 상속)
pUser1.streamMusicForFree(); // 출력: Free music streaming for chris123@google.com
