// 2-05. 일반 메서드를 활용한 캡슐화 (getEmail / setEmail)

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
