// 4-05. 개방 폐쇄 원칙을 적용한 코드

// 쿠폰마다 같은 이름의 apply(price)로 할인한 가격을 계산합니다
class PercentCoupon {
  #rate;

  constructor(rate) {
    this.#rate = rate;
  }

  apply(price) {
    return price - price * this.#rate;
  }
}

class AmountCoupon {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  apply(price) {
    return price - this.#amount;
  }
}

class PriceCalculator {
  calculate(price, coupon) {
    return coupon.apply(price);
  }
}

// 새 쿠폰은 apply(price)를 가진 클래스로 추가합니다
class MinimumOrderCoupon {
  #minPrice;
  #amount;

  constructor(minPrice, amount) {
    this.#minPrice = minPrice;
    this.#amount = amount;
  }

  apply(price) {
    if (price < this.#minPrice) {
      return price;
    }
    return price - this.#amount;
  }
}

const calculator = new PriceCalculator();
const percentCoupon = new PercentCoupon(0.1);
const amountCoupon = new AmountCoupon(5_000);
const minimumCoupon = new MinimumOrderCoupon(20_000, 4_000);

console.log(calculator.calculate(30_000, percentCoupon)); // 출력: 27000
console.log(calculator.calculate(30_000, amountCoupon)); // 출력: 25000
console.log(calculator.calculate(30_000, minimumCoupon)); // 출력: 26000
console.log(calculator.calculate(10_000, minimumCoupon)); // 출력: 10000
