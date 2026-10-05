// 3-08. 옵저버 패턴, Observer

// 구독자 역할을 하는 클래스들
class EmailSubscriber {
  constructor(email) {
    this.email = email;
  }
  update(product) {
    console.log(
      `[이메일 → ${this.email}] "${product.name}" 재입고 알림`,
    );
  }
}

class SmsSubscriber {
  constructor(phone) {
    this.phone = phone;
  }
  update(product) {
    console.log(
      `[SMS → ${this.phone}] "${product.name}" 재입고 알림`,
    );
  }
}

// 발행자: 구독자 목록을 관리하고 상태 변경 시 알립니다
class Product {
  #name;
  #stock;
  #subscribers;

  constructor(name, stock) {
    this.#name = name;
    this.#stock = stock;
    this.#subscribers = [];
  }

  get name() {
    return this.#name;
  }

  get stock() {
    return this.#stock;
  }

  subscribe(subscriber) {
    this.#subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.#subscribers = this.#subscribers.filter(
      (s) => s !== subscriber,
    );
  }

  setStock(newStock) {
    // 1. 바꾸기 전에 재고가 0이었는지 기억합니다.
    const wasOutOfStock = this.#stock === 0;
    // 2. 새 재고로 바꿉니다.
    this.#stock = newStock;

    // 3. 재고가 0에서 복구될 때만 모든 구독자에게 알립니다.
    if (wasOutOfStock && newStock > 0) {
      this.#notifyAll();
    }
  }

  #notifyAll() {
    this.#subscribers.forEach((subscriber) =>
      subscriber.update(this),
    );
  }
}

const jacket = new Product("겨울 재킷", 0);

const emailUser = new EmailSubscriber("chris@google.com");
const smsUser = new SmsSubscriber("010-1234-5678");

jacket.subscribe(emailUser);
jacket.subscribe(smsUser);

jacket.setStock(10);
// 출력:
// [이메일 → chris@google.com] "겨울 재킷" 재입고 알림
// [SMS → 010-1234-5678] "겨울 재킷" 재입고 알림

jacket.unsubscribe(smsUser);
jacket.setStock(0);
jacket.setStock(5);
// 출력: [이메일 → chris@google.com] "겨울 재킷" 재입고 알림
