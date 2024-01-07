// 아래의 코드는 오류 기록용으로 해당 코드는 node 환경에서 읽을 수 없으므로 빌드 시 오류가 난다.
// export const baseUrl = process.env.VERCEL_ENV === 'product' ? "https://beomjoon.site" : "http://localhost:3000";

export const baseUrl =   process.env.NODE_ENV === "production"
? "https://beomjoon.site"
: "http://localhost:3000";
