// 3-02. 싱글턴 패턴, Singleton

class DatabasePool {
  static #instance = null;
  #connectionString;

  constructor(connectionString) {
    if (DatabasePool.#instance) {
      throw new Error(
        "이미 인스턴스가 존재합니다. getInstance()를 사용하십시오.",
      );
    }
    this.#connectionString = connectionString;
    console.log(`DB pool 생성: ${connectionString}`);

    DatabasePool.#instance = this;
  }

  static getInstance(connectionString) {
    if (DatabasePool.#instance === null) {
      new DatabasePool(connectionString);
    }
    return DatabasePool.#instance;
  }

  query(sql) {
    console.log(`[${this.#connectionString}] 쿼리 실행: ${sql}`);
  }
}

const pool1 = DatabasePool.getInstance(
  "postgresql://localhost:5432/mydb",
);
// DB pool 생성: postgresql://localhost:5432/mydb

const pool2 = DatabasePool.getInstance(
  "postgresql://localhost:5432/mydb",
);
// 두 번째 호출: DB pool 생성 메시지가 출력되지 않습니다

console.log(pool1 === pool2); // true

pool1.query("SELECT * FROM users");
// [postgresql://localhost:5432/mydb] 쿼리 실행: SELECT * FROM users

// ❌ 인스턴스가 이미 있는데 new를 직접 호출하는 경우
try {
  new DatabasePool("postgresql://localhost:5432/mydb");
} catch (error) {
  console.log(error.message);
  // 이미 인스턴스가 존재합니다. getInstance()를 사용하십시오.
}
