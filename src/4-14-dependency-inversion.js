// 4-14. 의존성 역전 원칙, Dependency Inversion Principle

// ❌ 플레이어가 특정 무기 클래스를 직접 만드는 경우
class Sword {
  slash(target) {
    console.log(`검으로 ${target}을 벱니다`);
  }
}

class Bow {
  shoot(target) {
    console.log(`활로 ${target}을 쏩니다`);
  }
}

class Player {
  #name;
  #sword;

  constructor(name) {
    this.#name = name;
    this.#sword = new Sword();
  }

  attack(target) {
    console.log(`${this.#name}의 공격!`);
    this.#sword.slash(target);
  }
}

const warrior = new Player("전사");
warrior.attack("고블린");
// 출력:
// 전사의 공격!
// 검으로 고블린을 벱니다

// Bow를 쓰는 플레이어는 Player 클래스를 고치지 않으면 만들 수 없습니다
