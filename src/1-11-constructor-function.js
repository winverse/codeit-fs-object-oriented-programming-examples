// 1-11. 객체 만들기, 생성자 함수

function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}

const item = {
  name: "스웨터",
  price: 30_000,
};

const user1 = new User("chris123@google.com", "1992-03-21");
const user2 = new User("jerry99@google.com", "1995-07-19");
const user3 = new User("alice@google.com", "1993-12-24");

console.log(user1.email); // 출력: chris123@google.com
console.log(user2.email); // 출력: jerry99@google.com
console.log(user3.email); // 출력: alice@google.com

user1.buy(item); // 출력: chris123@google.com buys 스웨터
user2.buy(item); // 출력: jerry99@google.com buys 스웨터
user3.buy(item); // 출력: alice@google.com buys 스웨터

console.log(user1.buy === user2.buy); // 출력: false
