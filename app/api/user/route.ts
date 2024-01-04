import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    //OFFSET 시작번호 ROWS FETCH NEXT 페이지보여줄갯수 ROWS ONLY 
    const result =
      await sql`SELECT * FROM users OFFSET 1 ROWS FETCH NEXT 1 ROWS ONLY;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}