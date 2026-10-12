// 4-08. 리스코프 치환 원칙, Liskov Substitution Principle

// ❌ 부모 클래스 자리에 넣으면 다르게 동작하는 자식 클래스
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

// 휴면 회원은 구매할 수 없습니다
class DormantUser extends User {
  buy(item) {
    console.log(
      `${this.getEmail()}: 휴면 회원은 구매할 수 없습니다`,
    );
  }
}

// 선물하기 회원은 받는 사람도 함께 받습니다
class GiftUser extends User {
  buy(item, friend) {
    console.log(
      `${this.getEmail()} buys ${item.name} for ${friend.getEmail()}`,
    );
  }
}

// 회원 목록의 모든 회원이 상품을 구매합니다
function orderAll(users, item) {
  let count = 0;
  users.forEach((user) => {
    user.buy(item);
    count += 1;
  });
  console.log(`주문 ${count}건 완료`);
}

const item = { name: "스웨터", price: 30_000 };
const user = new User("a@shop.com");
const dormantUser = new DormantUser("b@shop.com");
const giftUser = new GiftUser("c@shop.com");

orderAll([user, dormantUser], item);
// 출력:
// a@shop.com buys 스웨터
// b@shop.com: 휴면 회원은 구매할 수 없습니다
// 주문 2건 완료

try {
  orderAll([user, giftUser], item);
} catch (error) {
  console.log(error.message);
}
// 출력:
// a@shop.com buys 스웨터
// Cannot read properties of undefined (reading 'getEmail')
