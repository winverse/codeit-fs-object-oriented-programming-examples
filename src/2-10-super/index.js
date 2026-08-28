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
}

class InvalidPremiumUser extends User {
  #level;

  constructor(email, birthdate, level) {
    try {
      this.#level = level;
    } catch (error) {
      console.log(error.name); // ReferenceError
    }

    super(email, birthdate);
  }
}

new InvalidPremiumUser("chris@google.com", "1992-03-21", 3);

class PremiumUser extends User {
  #level;

  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.#level = level;
  }

  get level() {
    return this.#level;
  }
}

const premiumUser = new PremiumUser(
  "chris@google.com",
  "1992-03-21",
  3,
);

console.log(premiumUser.email); // chris@google.com
console.log(premiumUser.level); // 3
