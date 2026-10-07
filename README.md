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
node src/2-12-super/error.js
```

## 예제 구성

| 장 | 항목 | 경로 |
| --- | --- | --- |
| 1장 | 03. 객체 지향 프로그래밍 | `src/1-03-oop-intro` |
| 1장 | 05. 객체 만들기, 객체 리터럴 | `src/1-05-object-literal` |
| 1장 | 08. 객체 만들기, 팩토리 함수 | `src/1-08-factory-function` |
| 1장 | 11. 객체 만들기, 생성자 함수 | `src/1-11-constructor-function` |
| 1장 | 14. 객체 만들기, 클래스 | `src/1-14-class` |
| 2장 | 03. 추상화 | `src/2-03-abstraction` (`index.js`, `naming.js`) |
| 2장 | 06. 캡슐화 | `src/2-06-encapsulation` (`index.js`, `private-field.js`) |
| 2장 | 09. 상속 | `src/2-09-inheritance` (`index.js`, `extends.js`, `battle.js`) |
| 2장 | 12. super | `src/2-12-super` |
| 2장 | 15. instanceof 연산자 | `src/2-15-instanceof` |
| 2장 | 17. 다형성 | `src/2-17-polymorphism` |
| 2장 | 19. 부모 클래스 메서드 재사용하기 | `src/2-19-super-method` |
| 2장 | 22. static 프로퍼티와 static 메서드 | `src/2-22-static` |
| 2장 | 24. 유틸리티 클래스와 static factory method | `src/2-24-utility-static-factory` |
| 2장 | 26. 객체 지향 핵심 개념 | `src/2-26-summary` |
| 3장 | 02. 싱글턴 패턴, Singleton | `src/3-02-singleton` |
| 3장 | 05. 단순 팩토리 패턴, Simple Factory | `src/3-05-simple-factory` |
| 3장 | 08. 전략 패턴, Strategy | `src/3-08-strategy` |
| 3장 | 11. 옵저버 패턴, Observer | `src/3-11-observer` |
| 4장 | 02. 단일 책임 원칙, Single Responsibility Principle | `src/4-02-single-responsibility` (`index.js`, `applied.js`) |
| 4장 | 05. 개방 폐쇄 원칙, Open-Closed Principle | `src/4-05-open-closed` (`index.js`, `applied.js`) |
| 4장 | 08. 리스코프 치환 원칙, Liskov Substitution Principle | `src/4-08-liskov-substitution` (`index.js`, `applied.js`) |
| 4장 | 11. 인터페이스 분리 원칙, Interface Segregation Principle | `src/4-11-interface-segregation` (`index.js`, `applied.js`) |
| 4장 | 14. 의존성 역전 원칙, Dependency Inversion Principle | `src/4-14-dependency-inversion` (`index.js`, `applied.js`) |
