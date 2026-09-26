# Object-Oriented Programming - JS Examples

이 저장소는 객체 지향 프로그래밍 강의의 독립 개념 예제 모음입니다.

직접 문제를 해결하는 활동은 별도 [practice 저장소](https://github.com/winverse/codeit-fs-object-oriented-programming-practice)에서 진행합니다. 이 저장소에는 practice의 TODO, 정답, 문제 테스트를 포함하지 않습니다.

## 시작 상태

- 각 폴더는 서로 독립적으로 실행할 수 있는 강의 개념 예제입니다.
- 폴더 번호는 교재의 장 번호와 항목 번호를 따릅니다.
- 예제 파일은 완결된 실행 단위이며, 한 예제의 상태가 다음 예제로 누적되지 않습니다.

## 실행

모든 예제가 오류 없이 실행되는지 확인합니다.

```bash
pnpm test
```

모든 예제의 출력을 순서대로 확인합니다.

```bash
pnpm examples
```

하나의 예제만 확인하려면 해당 파일을 직접 실행합니다.

```bash
node src/1-03-oop-intro/index.js
```

`super()`를 생략했을 때의 오류는 별도 파일로 확인합니다. 이 파일은 의도한 `ReferenceError`로 종료됩니다.

```bash
node src/2-10-super/error.js
```

## 예제 구성

| 장 | 항목 | 경로 |
| --- | --- | --- |
| 1장 | 03. 객체 지향 프로그래밍이란 | `src/1-03-oop-intro` |
| 1장 | 04. 객체 만들기, 객체 리터럴 | `src/1-04-object-literal` |
| 1장 | 05. 객체 만들기, 팩토리 함수 | `src/1-05-factory-function` |
| 1장 | 06. 객체 만들기, 생성자 함수 | `src/1-06-constructor-function` |
| 1장 | 07. 객체 만들기, 클래스 | `src/1-07-class` |
| 2장 | 03. 추상화 | `src/2-03-abstraction` |
| 2장 | 05. 캡슐화 | `src/2-05-encapsulation` |
| 2장 | 07. 캡슐화 더 알아보기: 클로저(closure)로 구현하기 | `src/2-07-encapsulation-closure` |
| 2장 | 08. 상속 | `src/2-08-inheritance` |
| 2장 | 10. super | `src/2-10-super` |
| 2장 | 11. instanceof 연산자 | `src/2-11-instanceof` |
| 2장 | 12. 다형성 | `src/2-12-polymorphism` |
| 2장 | 14. 부모 클래스 메서드 재사용하기 | `src/2-14-super-method` |
| 2장 | 15. static 프로퍼티와 static 메서드 | `src/2-15-static` |
| 2장 | 17. 객체 지향 핵심 개념 | `src/2-17-summary` |
| 3장 | 02. 싱글턴 패턴, Singleton | `src/3-02-singleton` |
| 3장 | 04. 단순 팩토리 패턴, Simple Factory | `src/3-04-simple-factory` |
| 3장 | 06. 전략 패턴, Strategy | `src/3-06-strategy` |
| 3장 | 08. 옵저버 패턴, Observer | `src/3-08-observer` |
