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
