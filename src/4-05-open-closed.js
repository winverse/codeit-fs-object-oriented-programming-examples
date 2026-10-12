// 4-05. 개방 폐쇄 원칙, Open-Closed Principle

// ❌ 쿠폰 종류마다 분기하는 경우
class PercentCoupon {
  constructor(rate) {
    this.rate = rate;
  }
}

class AmountCoupon {
  constructor(amount) {
    this.amount = amount;
  }
}

class PriceCalculator {
  calculate(price, coupon) {
    if (coupon instanceof PercentCoupon) {
      return price - price * coupon.rate;
    } else if (coupon instanceof AmountCoupon) {
      return price - coupon.amount;
    }
  }
}

const calculator = new PriceCalculator();
const percentCoupon = new PercentCoupon(0.1);
const amountCoupon = new AmountCoupon(5_000);

console.log(calculator.calculate(30_000, percentCoupon)); // 출력: 27000
console.log(calculator.calculate(30_000, amountCoupon)); // 출력: 25000

// 주문 금액이 기준 이상일 때만 할인하는 쿠폰을 새로 만들었습니다
class MinimumOrderCoupon {
  constructor(minPrice, amount) {
    this.minPrice = minPrice;
    this.amount = amount;
  }
}

const minimumCoupon = new MinimumOrderCoupon(20_000, 4_000);
console.log(calculator.calculate(30_000, minimumCoupon)); // 출력: undefined
