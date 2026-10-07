// 4-02. 단일 책임 원칙, Single Responsibility Principle

// ❌ 주문 클래스 하나가 여러 일을 맡은 경우
class Order {
  #items;

  constructor() {
    this.#items = [];
  }

  addItem(item) {
    this.#items.push(item);
  }

  getTotalPrice() {
    return this.#items.reduce(
      (sum, item) => sum + item.price,
      0,
    );
  }

  printReceipt() {
    console.log("[영수증]");
    this.#items.forEach((item) => {
      console.log(`${item.name} ${item.price}원`);
    });
    console.log(`합계 ${this.getTotalPrice()}원`);
  }

  sendConfirmEmail(email) {
    console.log(
      `[이메일 → ${email}] 주문 금액 ${this.getTotalPrice()}원`,
    );
  }
}

const order = new Order();
order.addItem({ name: "스웨터", price: 30_000 });
order.addItem({ name: "청바지", price: 50_000 });

order.printReceipt();
// 출력:
// [영수증]
// 스웨터 30000원
// 청바지 50000원
// 합계 80000원

order.sendConfirmEmail("chris123@google.com");
// 출력: [이메일 → chris123@google.com] 주문 금액 80000원
