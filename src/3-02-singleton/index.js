// 3-02. 싱글턴 패턴, Singleton

class DatabasePool {
  static #instance = null;
  #connectionString;

  constructor(connectionString) {
    // 1. 이미 인스턴스가 있으면 오류를 던져 두 번째 생성을 막습니다.
    if (DatabasePool.#instance) {
      throw new Error(
        "이미 인스턴스가 존재합니다. getInstance()를 사용하십시오.",
      );
    }
    // 2. 연결 문자열을 저장하고 생성 메시지를 출력합니다.
    this.#connectionString = connectionString;
    console.log(`DB pool 생성: ${connectionString}`);

    // 3. 방금 만든 인스턴스를 #instance에 저장합니다.
    DatabasePool.#instance = this;
  }

  static getInstance(connectionString) {
    // 4. 아직 인스턴스가 없을 때만 새로 만듭니다.
    if (DatabasePool.#instance === null) {
      new DatabasePool(connectionString);
    }
    // 5. 저장해 둔 하나의 인스턴스를 반환합니다.
    return DatabasePool.#instance;
  }

  query(sql) {
    console.log(`[${this.#connectionString}] 쿼리 실행: ${sql}`);
  }
}

const pool1 = DatabasePool.getInstance(
  "postgresql://localhost:5432/mydb",
);
// 출력: DB pool 생성: postgresql://localhost:5432/mydb

const pool2 = DatabasePool.getInstance(
  "postgresql://localhost:5432/mydb",
);
// 두 번째 호출: DB pool 생성 메시지가 출력되지 않습니다

console.log(pool1 === pool2); // 출력: true

pool1.query("SELECT * FROM users");
// 출력: [postgresql://localhost:5432/mydb] 쿼리 실행: SELECT * FROM users

// ❌ 인스턴스가 이미 있는데 new를 직접 호출하는 경우
try {
  new DatabasePool("postgresql://localhost:5432/mydb");
} catch (error) {
  console.log(error.message);
  // 출력: 이미 인스턴스가 존재합니다. getInstance()를 사용하십시오.
}
