// 2-09. 상속

// ─────────────────────────────────────
// 상속이 필요한 이유
// ─────────────────────────────────────
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
