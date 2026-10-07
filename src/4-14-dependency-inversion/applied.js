// 4-14. 의존성 역전 원칙을 적용한 코드

// 무기마다 같은 이름의 use(target)로 공격합니다
class Sword {
  use(target) {
    console.log(`검으로 ${target}을 벱니다`);
  }
}

class Bow {
  use(target) {
    console.log(`활로 ${target}을 쏩니다`);
  }
}

// Player는 받은 무기의 use(target)만 호출합니다
class Player {
  #name;
  #weapon;

  constructor(name, weapon) {
    this.#name = name;
    this.#weapon = weapon;
  }

  attack(target) {
    console.log(`${this.#name}의 공격!`);
    this.#weapon.use(target);
  }
}

const warrior = new Player("전사", new Sword());
const archer = new Player("궁수", new Bow());

warrior.attack("고블린");
// 출력:
// 전사의 공격!
// 검으로 고블린을 벱니다

archer.attack("고블린");
// 출력:
// 궁수의 공격!
// 활로 고블린을 쏩니다
