// 2-06. private field와 메서드

class User {
  #email; // private field 선언(선언은 필수이며, 보통 클래스 상단에 모아 둡니다)
  #birthdate;

  constructor(email, birthdate) {
    this.setEmail(email); // setEmail()로 검증한 뒤 #email에 저장
    this.#birthdate = birthdate;
  }

  getEmail() {
    return this.#email; // #email 값을 반환
  }

  getBirthdate() {
    return this.#birthdate;
  }

  setEmail(address) {
    if (address.includes("@")) {
      this.#email = address; // 검증 통과 시 #email에 저장
    } else {
      throw new Error("invalid email address");
    }
  }

  buy(item) {
    console.log(`${this.getEmail()} buys ${item.name}`);
  }
}

const user1 = new User("chris123@google.com", "1992-03-21");
user1.setEmail("newChris123@google.com"); // "@" 포함 → 정상 저장
console.log(user1.getEmail()); // 출력: newChris123@google.com

try {
  user1.setEmail("chris robert"); // "@" 없음 → 오류 발생!
} catch (error) {
  console.log(error.message); // 출력: invalid email address
}

// ❌ SyntaxError: 문법 오류이므로 프로그램이 아예 실행되지 않음
// user1.#email;
