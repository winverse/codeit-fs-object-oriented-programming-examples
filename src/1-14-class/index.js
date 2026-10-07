// 1-14. 객체 만들기, 클래스

class User {
  // constructor: 인스턴스마다 달라지는 값을 초기화합니다
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  // 메서드: 모든 인스턴스가 함께 사용합니다
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const item = {
  name: "스웨터",
  price: 30_000,
};

const user1 = new User("chris123@google.com", "1992-03-21");
const user2 = new User("jerry99@google.com", "1995-07-19");

console.log(user1.email); // 출력: chris123@google.com
console.log(user2.birthdate); // 출력: 1995-07-19
user1.buy(item); // 출력: chris123@google.com buys 스웨터
user2.buy(item); // 출력: jerry99@google.com buys 스웨터
console.log(user1.buy === user2.buy); // 출력: true
