// 3-06. 전략 패턴, Strategy

// 각 결제 수단을 전략 클래스로 분리합니다
class CardPayment {
  pay(amount) {
    console.log(
      `카드사 API 호출 — ${amount}원 결제 요청`,
    );
  }
}

class KakaoPayment {
  pay(amount) {
    console.log(
      `카카오페이 API 호출 — ${amount}원 결제 요청`,
    );
  }
}

class NaverPayment {
  pay(amount) {
    console.log(
      `네이버페이 API 호출 — ${amount}원 결제 요청`,
    );
  }
}

// Context: 결제 전략을 constructor로 전달받아 처리를 맡깁니다
class Checkout {
  #paymentStrategy;

  constructor(paymentStrategy) {
    this.#paymentStrategy = paymentStrategy;
  }

  // 사용자가 결제 수단을 바꾸면 실행 중에 전략을 교체합니다
  setPaymentStrategy(paymentStrategy) {
    this.#paymentStrategy = paymentStrategy;
  }

  pay(amount) {
    this.#paymentStrategy.pay(amount);
  }
}

const checkout = new Checkout(new CardPayment());
checkout.pay(30_000);
// 출력: 카드사 API 호출 — 30000원 결제 요청

// 사용자가 결제 수단을 변경합니다
checkout.setPaymentStrategy(new KakaoPayment());
checkout.pay(30_000);
// 출력: 카카오페이 API 호출 — 30000원 결제 요청

// 네이버페이로 바꿀 때도 Checkout 코드는 수정하지 않습니다
checkout.setPaymentStrategy(new NaverPayment());
checkout.pay(30_000);
// 출력: 네이버페이 API 호출 — 30000원 결제 요청
