// 2-24. 유틸리티 클래스와 static factory method

// ─────────────────────────────────────
// 유틸리티 클래스: Validator
// ─────────────────────────────────────
class Validator {
  // 이메일 형식 검증
  static isEmail(value) {
    return typeof value === "string" && value.includes("@");
  }

  // 가격 유효성 검증 (0보다 크고 정수여야 함)
  static isValidPrice(value) {
    return Number.isInteger(value) && value > 0;
  }
}

console.log(Validator.isEmail("chris123@google.com")); // 출력: true
console.log(Validator.isEmail("chris google")); // 출력: false
console.log(Validator.isValidPrice(30_000)); // 출력: true
console.log(Validator.isValidPrice(-100)); // 출력: false

// ─────────────────────────────────────
// static factory method: User
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

  getRole() {
    return this.#role;
  }

  // 일반 사용자를 만드는 static factory method
  static createNormal(email, birthdate) {
    return new User(email, birthdate, "normal");
  }

  // 관리자를 만드는 static factory method
  static createAdmin(email, birthdate) {
    return new User(email, birthdate, "admin");
  }
}

const normalUser = User.createNormal(
  "chris123@google.com",
  "1992-03-21",
);
const adminUser = User.createAdmin(
  "alice@google.com",
  "1993-12-24",
);

console.log(normalUser.getRole()); // 출력: normal
console.log(adminUser.getRole()); // 출력: admin
