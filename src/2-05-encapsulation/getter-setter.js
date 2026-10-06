// 2-05. 1단계: getter/setter와 _email 관례

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
