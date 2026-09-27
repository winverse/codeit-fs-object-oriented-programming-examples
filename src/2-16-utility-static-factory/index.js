// 2-16. 유틸리티 클래스와 static factory method

// ─────────────────────────────────────
// 유틸리티 클래스 패턴: Validator
// ─────────────────────────────────────
class Validator {
  static isEmail(value) {
    return typeof value === "string" && value.includes("@");
  }

  static isValidPrice(value) {
    return Number.isInteger(value) && value > 0;
  }
}

console.log(Validator.isEmail("chris123@google.com")); // 출력: true
console.log(Validator.isEmail("chris google"));     // 출력: false
console.log(Validator.isValidPrice(30_000));        // 출력: true
console.log(Validator.isValidPrice(-100));          // 출력: false

// ─────────────────────────────────────
// static factory method 패턴: User
// ─────────────────────────────────────
class User {
  #email;
  #birthdate;
  #role;

  constructor(email, birthdate, role) {
    this.#email = email;
    this.#birthdate = birthdate;
    this.#role = role;
  }

  get email() {
    return this.#email;
  }

  get role() {
    return this.#role;
  }

  static createNormal(email, birthdate) {
    return new User(email, birthdate, "normal");
  }

  static createAdmin(email, birthdate) {
    return new User(email, birthdate, "admin");
  }

  static fromJSON(json) {
    const parsed = JSON.parse(json);
    return new User(parsed.email, parsed.birthdate, parsed.role);
  }
}

const normalUser = User.createNormal("chris123@google.com", "1992-03-21");
const adminUser = User.createAdmin("alice@google.com", "1993-12-24");
const restored = User.fromJSON(
  '{"email":"jerry99@google.com","birthdate":"1995-07-19","role":"normal"}',
);

console.log(normalUser.role); // 출력: normal
console.log(adminUser.role);  // 출력: admin
console.log(restored.email);  // 출력: jerry99@google.com
