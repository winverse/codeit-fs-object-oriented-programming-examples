// 2-09. 1장 전투 객체 문제를 상속으로 재구성

class Character {
  constructor({
    name,
    maxHp,
    mp,
    attackPower,
    potionCount,
  }) {
    this.name = name;
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.mp = mp;
    this.attackPower = attackPower;
    this.potionCount = potionCount;
  }

  takeDamage(amount) {
    this.hp = Math.max(this.hp - amount, 0);
  }

  attack(target) {
    target.takeDamage(this.attackPower);
  }

  usePotion() {
    if (this.potionCount === 0) {
      return false;
    }
    this.hp = Math.min(this.hp + 30, this.maxHp);
    this.potionCount -= 1;
    return true;
  }

  getStatus() {
    return `${this.name} | HP:${this.hp}/${this.maxHp} MP:${this.mp} Potion:${this.potionCount}`;
  }
}

class Warrior extends Character {
  powerStrike(target) {
    if (this.mp < 10) {
      return false;
    }
    this.mp -= 10;
    target.takeDamage(this.attackPower * 2);
    return true;
  }
}

class Mage extends Character {
  castFireball(target) {
    if (this.mp < 20) {
      return false;
    }
    this.mp -= 20;
    target.takeDamage(40);
    return true;
  }
}

const warrior = new Warrior({
  name: "전사",
  maxHp: 140,
  mp: 30,
  attackPower: 18,
  potionCount: 2,
});
const mage = new Mage({
  name: "마법사",
  maxHp: 90,
  mp: 60,
  attackPower: 8,
  potionCount: 0,
});

warrior.powerStrike(mage);
console.log(warrior.getStatus()); // 출력: 전사 | HP:140/140 MP:20 Potion:2
console.log(mage.getStatus()); // 출력: 마법사 | HP:54/90 MP:60 Potion:0
