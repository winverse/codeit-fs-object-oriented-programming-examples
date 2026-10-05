// 1-07. 객체 만들기, 팩토리 함수

function createUser(email, birthdate) {
  const user = {
    email,
    birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const item = {
  name: "스웨터",
  price: 30_000,
};

// 함수를 호출할 때마다 새로운 객체가 만들어집니다
const user1 = createUser("chris123@google.com", "1992-03-21");
const user2 = createUser("jerry99@google.com", "1995-07-19");
const user3 = createUser("alice@google.com", "1993-12-24");

console.log(user1.email); // 출력: chris123@google.com
console.log(user2.email); // 출력: jerry99@google.com
console.log(user3.email); // 출력: alice@google.com

user1.buy(item); // 출력: chris123@google.com buys 스웨터
user2.buy(item); // 출력: jerry99@google.com buys 스웨터
user3.buy(item); // 출력: alice@google.com buys 스웨터

// ─────────────────────────────────────
// 메서드가 같은 함수 객체인지 확인
// ─────────────────────────────────────
// 두 프로퍼티가 같은 함수 객체를 참조하는지 확인합니다.
console.log(user1.buy === user2.buy); // 출력: false
console.log(user1.buy === user3.buy); // 출력: false
// 기능은 동일하지만 메모리상 독립적으로 존재하는 개별 함수입니다
