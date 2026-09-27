// 2-05. 캡슐화

// ─────────────────────────────────────
// 프로퍼티를 그대로 공개한 User
// ─────────────────────────────────────
{
  class User {
    constructor(email, birthdate) {
      this.email = email;
      this.birthdate = birthdate;
    }

    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    }
  }

  const user1 = new User("chris123@google.com", "1992-03-21");

  user1.email = "chris robert"; // 이메일 형식이 아닌 값을 대입하는 실수
  console.log(user1.email); // 출력: chris robert
}

// ─────────────────────────────────────
// 1단계: getter/setter와 _email 관례
// ─────────────────────────────────────
{
  class User {
    constructor(email, birthdate) {
      this.email = email; // setter를 통해 검증한 뒤 _email에 저장
      this.birthdate = birthdate;
    }

    get email() {
      // user1.email로 읽으면 이 getter 실행
      return this._email;
    }

    set email(address) {
      // user1.email = "..." 하면 이 setter 실행
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

  const user1 = new User("chris123@google.com", "1992-03-21");
  user1.email = "newChris123@google.com"; // setter 실행 → "@" 포함 → 정상 저장
  console.log(user1.email); // getter 실행 → 출력: newChris123@google.com

  try {
    user1.email = "chris robert"; // setter 실행 → "@" 없음 → 오류 발생!
  } catch (error) {
    console.log(error.message); // 출력: invalid email address
  }

  console.log(user1._email); // 출력: newChris123@google.com
  user1._email = "chris robert"; // setter를 거치지 않고 직접 수정
  console.log(user1.email); // 출력: chris robert
}

// ─────────────────────────────────────
// private field와 getter/setter
// ─────────────────────────────────────
{
  class User {
    #email; // private field 선언(선언은 필수이며, 보통 클래스 상단에 모아 둡니다)
    #birthdate;

    constructor(email, birthdate) {
      this.email = email; // setter를 통해 검증한 뒤 #email에 저장
      this.#birthdate = birthdate;
    }

    get email() {
      return this.#email; // #email 값을 반환
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
  console.log(user1.email); // getter 실행 → 출력: newChris123@google.com

  try {
    user1.email = "chris robert"; // setter 실행 → "@" 없음 → 오류 발생!
  } catch (error) {
    console.log(error.message); // 출력: invalid email address
  }

  // ❌ SyntaxError: 문법 오류이므로 프로그램이 아예 실행되지 않음
  // user1.#email;
}

// ─────────────────────────────────────
// 일반 메서드를 활용한 캡슐화 (getEmail / setEmail)
// ─────────────────────────────────────
{
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
}
