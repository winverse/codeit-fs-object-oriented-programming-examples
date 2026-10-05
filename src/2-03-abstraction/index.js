// 2-03. 추상화

// ─────────────────────────────────────
// 같은 대상, 다른 추상화
// ─────────────────────────────────────

// 쇼핑몰 서비스의 User
// → 이메일(로그인), 생년월일(마케팅), 구매 동작이 핵심
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

// 병원 예약 서비스의 Patient (환자)
// → 이름, 환자 식별자, 증상, 진료 예약 동작이 핵심
class Patient {
  constructor(name, patientId, symptom) {
    this.name = name;
    this.patientId = patientId;
    this.symptom = symptom;
  }

  makeAppointment(doctor) {
    console.log(
      `${this.name} schedules appointment with ${doctor.name}`,
    );
  }
}

// 소셜 미디어 서비스의 Member (회원)
// → 닉네임, 팔로워 수, 게시물 올리기 동작이 핵심
class Member {
  constructor(nickname, followerCount) {
    this.nickname = nickname;
    this.followerCount = followerCount;
  }

  post(content) {
    console.log(`${this.nickname} posts: ${content}`);
  }
}

// ─────────────────────────────────────
// 이름 짓기 비교
// ─────────────────────────────────────
{
  // ✅ 이름이 명확한 코드 → 코드만 봐도 의미를 알 수 있습니다
  class User {
    constructor(email, birthdate) {
      this.email = email;
      this.birthdate = birthdate;
    }

    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    }
  }

  const item = { name: "스웨터", price: 30_000 };
  const user1 = new User("chris123@google.com", "1992-03-21");
  user1.buy(item); // 출력: chris123@google.com buys 스웨터
}
