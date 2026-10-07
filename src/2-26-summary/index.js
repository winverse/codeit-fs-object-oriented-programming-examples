// 2-26. 객체 지향 핵심 개념
// 상속과 다형성의 관계

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  buy(item) {
    return `${this.getEmail()} buys ${item.name}`;
  }
}

class PremiumUser extends User {
  buy(item) {
    return `${super.buy(item)} with a 5% discount`;
  }
}

const users = [
  new User("basic@shop.com"),
  new PremiumUser("premium@shop.com"),
];
const item = { name: "스웨터" };

console.log(users.map((user) => user.buy(item)));
// 출력:
// [
//   'basic@shop.com buys 스웨터',
//   'premium@shop.com buys 스웨터 with a 5% discount'
// ]
