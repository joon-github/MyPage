const mysql = require("mysql2/promise"); // Promise 기반 mysql2 모듈 사용

// 연결 풀 생성
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // 연결 풀에 대한 최대 연결 수 설정
  queueLimit: 0, // 연결 요청 대기열 제한 없음
});

export async function queryPromise(queryString: string, values?: any) {
  let connection;
  try {
    connection = await pool.getConnection(); // 연결 풀에서 연결 가져오기
    const [results] = await connection.execute(queryString, values);
    return results;
  } catch (error) {
    throw error; // 오류 발생 시 throw
  } finally {
    if (connection) {
      await connection.release();
    } // 연결을 풀로 다시 반환
  }
}
