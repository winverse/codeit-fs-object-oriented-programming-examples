// 2-09. 상속

// ─────────────────────────────────────
// 상속이 필요한 이유
// ─────────────────────────────────────
{
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

  class PremiumUser {
    #email;
    #birthdate;
    #level;

    constructor(email, birthdate, level) {
      this.#email = email; // User와 동일!
      this.#birthdate = birthdate; // User와 동일!
      this.#level = level;
    }

    get email() {
      return this.#email;
    }
    get birthdate() {
      return this.#birthdate;
    }
    get level() {
      return this.#level;
    }

    buy(item) {
      console.log(`${this.email} buys ${item.name}`); // User와 동일!
    }

    streamMusicForFree() {
      console.log(`Free music streaming for ${this.email}`);
    }
  }
}

// ─────────────────────────────────────
// extends로 상속받기
// ─────────────────────────────────────
{
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

  // User를 상속합니다
  class PremiumUser extends User {
    #level;

    constructor(email, birthdate, level) {
      super(email, birthdate); // 부모 클래스의 constructor를 실행합니다
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

  pUser1.buy(item); // 출력: chris123@google.com buys 스웨터
  pUser1.streamMusicForFree(); // 출력: Free music streaming for chris123@google.com
}

// ─────────────────────────────────────
// 1장 전투 객체 문제를 상속으로 재구성
// ─────────────────────────────────────
{
  class Character {
    constructor({
      name,
      maxHp,
      mp,
      attackPower,
      potionCount,
    }) {
      this.name = name;
      this.maxHp = maxHp;
      this.hp = maxHp;
      this.mp = mp;
      this.attackPower = attackPower;
      this.potionCount = potionCount;
    }

    takeDamage(amount) {
      this.hp = Math.max(this.hp - amount, 0);
    }

    attack(target) {
      target.takeDamage(this.attackPower);
    }

    usePotion() {
      if (this.potionCount === 0) {
        return false;
      }
      this.hp = Math.min(this.hp + 30, this.maxHp);
      this.potionCount -= 1;
      return true;
    }

    getStatus() {
      return `${this.name} | HP:${this.hp}/${this.maxHp} MP:${this.mp} Potion:${this.potionCount}`;
    }
  }

  class Warrior extends Character {
    powerStrike(target) {
      if (this.mp < 10) {
        return false;
      }
      this.mp -= 10;
      target.takeDamage(this.attackPower * 2);
      return true;
    }
  }

  class Mage extends Character {
    castFireball(target) {
      if (this.mp < 20) {
        return false;
      }
      this.mp -= 20;
      target.takeDamage(40);
      return true;
    }
  }
}
