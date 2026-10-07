// 4-08. 리스코프 치환 원칙을 적용한 코드

// 적용 전 코드의 User와 같습니다
class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  buy(item) {
    console.log(`${this.#email} buys ${item.name}`);
  }
}

// 적용 전 코드의 orderAll과 같습니다
function orderAll(users, item) {
  let count = 0;
  users.forEach((user) => {
    user.buy(item);
    count += 1;
  });
  console.log(`주문 ${count}건 완료`);
}

// 선물하기는 buy를 바꾸지 않고 새 메서드로 추가합니다
class GiftUser extends User {
  buyFor(item, friend) {
    console.log(
      `${this.getEmail()} buys ${item.name} for ${friend.getEmail()}`,
    );
  }
}

// 구매할 수 없는 휴면 회원은 User를 상속하지 않습니다
class DormantUser {
  #email;

  constructor(email) {
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }
}

const item = { name: "스웨터", price: 30_000 };
const user = new User("a@shop.com");
const giftUser = new GiftUser("c@shop.com");
const dormantUser = new DormantUser("b@shop.com");

orderAll([user, giftUser], item);
// 출력:
// a@shop.com buys 스웨터
// c@shop.com buys 스웨터
// 주문 2건 완료

giftUser.buyFor(item, user);
// 출력: c@shop.com buys 스웨터 for a@shop.com

console.log(dormantUser instanceof User); // 출력: false
