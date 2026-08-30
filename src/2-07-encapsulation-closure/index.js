// 2-07. 캡슐화 더 알아보기 (클로저)

// ─────────────────────────────────────
// 클로저로 상태를 숨기는 기본 구조
// ─────────────────────────────────────
function createUser(email, birthdate) {
  let _email = email;

  return {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (!address.includes("@")) {
        throw new Error("invalid email address");
      }
      _email = address;
    },
  };
}

const closureUser = createUser("chris123@google.com", "1992-03-21");

console.log(closureUser.email); // chris123@google.com
console.log(closureUser._email); // undefined

// ─────────────────────────────────────
// 내부 함수까지 숨기기
// ─────────────────────────────────────
function createUserWithPoint(email, birthdate) {
  const _email = email;
  let _point = 0;

  function increasePoint() {
    _point += 1;
  }

  return {
    birthdate,

    get email() {
      return _email;
    },

    get point() {
      return _point;
    },

    buy(item) {
      console.log(`${_email} buys ${item.name}`);
      increasePoint();
    },
  };
}

const item = { name: "스웨터", price: 30_000 };
const user1 = createUserWithPoint("chris123@google.com", "1992-03-21");

user1.buy(item);
user1.buy(item);
user1.buy(item);
console.log(user1.point); // 3

try {
  user1.increasePoint(); // TypeError: user1.increasePoint is not a function
} catch (error) {
  console.log(error.message); // user1.increasePoint is not a function
}
