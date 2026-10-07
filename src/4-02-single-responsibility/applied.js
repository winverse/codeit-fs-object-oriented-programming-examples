// 4-02. 단일 책임 원칙을 적용한 코드

// 주문 상품과 금액 계산을 맡습니다
class Order {
  #items;

  constructor() {
    this.#items = [];
  }

  addItem(item) {
    this.#items.push(item);
  }

  getItems() {
    return this.#items;
  }

  getTotalPrice() {
    return this.#items.reduce(
      (sum, item) => sum + item.price,
      0,
    );
  }
}

// 영수증 출력을 맡습니다
class ReceiptPrinter {
  print(order) {
    console.log("[영수증]");
    order.getItems().forEach((item) => {
      console.log(`${item.name} ${item.price}원`);
    });
    console.log(`합계 ${order.getTotalPrice()}원`);
  }
}

// 주문 확인 메일 발송을 맡습니다
class OrderMailer {
  send(order, email) {
    console.log(
      `[이메일 → ${email}] 주문 금액 ${order.getTotalPrice()}원`,
    );
  }
}

const order = new Order();
order.addItem({ name: "스웨터", price: 30_000 });
order.addItem({ name: "청바지", price: 50_000 });

const receiptPrinter = new ReceiptPrinter();
receiptPrinter.print(order);
// 출력:
// [영수증]
// 스웨터 30000원
// 청바지 50000원
// 합계 80000원

const orderMailer = new OrderMailer();
orderMailer.send(order, "chris123@google.com");
// 출력: [이메일 → chris123@google.com] 주문 금액 80000원
