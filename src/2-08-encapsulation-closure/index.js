// 2-08. 캡슐화 더 알아보기: 클로저(Closure)로 구현하기

// ─────────────────────────────────────
// 클로저로 상태를 숨기는 기본 구조
// ─────────────────────────────────────
function createUser(email, birthdate) {
  // 1. 이메일을 담을 변수를 함수 안에 만듭니다.
  let savedEmail;

  // 2. savedEmail을 읽고 바꾸는 메서드를 가진 객체를 만듭니다.
  const user = {
    birthdate,

    getEmail() {
      return savedEmail;
    },

    setEmail(address) {
      if (!address.includes("@")) {
        throw new Error("invalid email address");
      }
      savedEmail = address;
    },
  };

  // 3. 처음 전달한 이메일을 setEmail()로 검증해 저장합니다.
  user.setEmail(email);
  // 4. 완성된 객체를 반환합니다.
  return user;
}

const closureUser = createUser(
  "chris123@google.com",
  "1992-03-21",
);

console.log(closureUser.getEmail()); // 출력: chris123@google.com
console.log(closureUser.savedEmail); // 출력: undefined

// ─────────────────────────────────────
// 내부 함수까지 숨기기
// ─────────────────────────────────────
function createUserWithPoint(email, birthdate) {
  // 1. 이메일과 포인트를 함수 안 변수에 둡니다.
  const savedEmail = email;
  let point = 0;

  // 2. 포인트를 올리는 내부 전용 함수를 만듭니다.
  function increasePoint() {
    point += 1;
  }

  // 3. birthdate와 getEmail·getPoint·buy 메서드를 담은 객체를 반환합니다.
  return {
    birthdate,

    getEmail() {
      return savedEmail;
    },

    getPoint() {
      return point;
    },

    buy(item) {
      console.log(`${savedEmail} buys ${item.name}`);
      increasePoint();
    },
  };
}

const item = { name: "스웨터", price: 30_000 };
const user1 = createUserWithPoint(
  "chris123@google.com",
  "1992-03-21",
);

user1.buy(item); // 출력: chris123@google.com buys 스웨터
user1.buy(item); // 출력: chris123@google.com buys 스웨터
user1.buy(item); // 출력: chris123@google.com buys 스웨터
console.log(user1.getPoint()); // 출력: 3

try {
  user1.increasePoint(); // ❌ TypeError: user1.increasePoint is not a function
} catch (error) {
  console.log(error.message); // 출력: user1.increasePoint is not a function
}
