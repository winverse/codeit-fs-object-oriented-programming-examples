// 2-11. super()를 생략했을 때 발생하는 오류

class User {}

class PremiumUser extends User {
  #level;

  constructor(email, birthdate, level) {
    // super(email, birthdate); // ❌ 생략
    this.#level = level; // 여기서 오류 발생
  }
}

new PremiumUser("chris123@google.com", "1992-03-21", 3);
