// 2-15. static 프로퍼티와 static 메서드

// ─────────────────────────────────────
// 기본 예시: MathUtils
// ─────────────────────────────────────
class MathUtils {
  static PI = 3.14;

  static getCircleArea(radius) {
    return MathUtils.PI * radius * radius;
  }
}

console.log(MathUtils.PI);              // 3.14
console.log(MathUtils.getCircleArea(5)); // 78.5

// ─────────────────────────────────────
// 인스턴스로 static 프로퍼티와 static 메서드에 접근하기
// ─────────────────────────────────────
const utils = new MathUtils();
console.log(utils.PI); // undefined

try {
  utils.getCircleArea(5); // TypeError: utils.getCircleArea is not a function
} catch (error) {
  console.log(error.message); // utils.getCircleArea is not a function
}

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

console.log(Validator.isEmail("chris123@google.com")); // true
console.log(Validator.isEmail("chris google"));     // false
console.log(Validator.isValidPrice(30_000));        // true
console.log(Validator.isValidPrice(-100));          // false

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

console.log(normalUser.role); // normal
console.log(adminUser.role);  // admin
console.log(restored.email);  // jerry99@google.com
