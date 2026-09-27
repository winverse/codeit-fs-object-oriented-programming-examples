// 2-05. 캡슐화

// ─────────────────────────────────────
// 1단계: _email 관례 (개발자 약속)
// ─────────────────────────────────────
class UserV1 {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  get email() {
    return this._email;
  }

  set email(address) {
    if (address.includes("@")) {
      this._email = address;
    } else {
      throw new Error("invalid email address");
    }
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

// ─────────────────────────────────────
// 2단계: #email private field (언어 문법 차단)
// ─────────────────────────────────────
class User {
  #email;
  #birthdate;

  constructor(email, birthdate) {
    this.email = email;
    this.#birthdate = birthdate;
  }

  get email() {
    return this.#email;
  }

  get birthdate() {
    return this.#birthdate;
  }

  set email(address) {
    if (address.includes("@")) {
      this.#email = address; // 검증 통과 시 #email에 저장
    } else {
      throw new Error("invalid email address");
    }
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const user1 = new User("chris123@google.com", "1992-03-21");
user1.email = "newChris123@google.com"; // setter 실행 → "@" 포함 → 정상 저장
console.log(user1.email);               // getter 실행 → 출력: newChris123@google.com

try {
  user1.email = "chris robert"; // setter 실행 → "@" 없음 → 오류 발생!
} catch (error) {
  console.log(error.message); // 출력: invalid email address
}

// ─────────────────────────────────────
// 일반 메서드를 활용한 캡슐화
// ─────────────────────────────────────
class UserWithMethods {
  #email;

  constructor(email) {
    this.setEmail(email);
  }

  getEmail() {
    return this.#email;
  }

  setEmail(value) {
    if (!value.includes("@")) {
      throw new Error("invalid email address");
    }
    this.#email = value;
  }
}

const userByMethod = new UserWithMethods(
  "chris123@google.com",
);

console.log(userByMethod.getEmail()); // 메서드 호출로 읽기 → 출력: chris123@google.com
userByMethod.setEmail("newChris123@google.com"); // 메서드 호출로 쓰기
