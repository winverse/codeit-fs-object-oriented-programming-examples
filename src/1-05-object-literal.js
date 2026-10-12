// 1-05. 객체 만들기, 객체 리터럴

// ─────────────────────────────────────
// this를 활용한 함수 재사용
// ─────────────────────────────────────
{
  function introduce() {
    // 어떤 객체의 메서드로 호출하느냐에 따라 그 객체의 이름을 출력합니다
    console.log(`Hello, I am ${this.name}`);
  }

  const user1 = { name: "Chris", introduce: introduce };
  const user2 = { name: "Alice", introduce: introduce };

  user1.introduce(); // 출력: Hello, I am Chris
  user2.introduce(); // 출력: Hello, I am Alice
}
