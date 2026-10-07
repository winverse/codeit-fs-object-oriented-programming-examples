// 2-24. static 프로퍼티와 static 메서드

// ─────────────────────────────────────
// 기본 예시: MathUtils
// ─────────────────────────────────────
class MathUtils {
  static PI = 3.14; // static 프로퍼티

  // static 메서드
  static getCircleArea(radius) {
    return MathUtils.PI * radius * radius;
  }
}

console.log(MathUtils.PI); // 출력: 3.14
console.log(MathUtils.getCircleArea(5)); // 출력: 78.5 (3.14 * 5 * 5)

// ─────────────────────────────────────
// 인스턴스로 static 프로퍼티와 static 메서드에 접근하기
// ─────────────────────────────────────
const utils = new MathUtils();
console.log(utils.PI); // 출력: undefined

try {
  utils.getCircleArea(5); // ❌ TypeError: utils.getCircleArea is not a function
} catch (error) {
  console.log(error.message); // 출력: utils.getCircleArea is not a function
}
