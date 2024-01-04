import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    //OFFSET 시작번호 ROWS FETCH NEXT 페이지보여줄갯수 ROWS ONLY
    const result =
      await sql`SELECT * FROM my_blog_category;`;
    return NextResponse.json({ result }, { status: 200,
      headers: {
      'Cache-Control': 'no-store', // Disable caching
    }, });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
type PostRequestData = {
  newName: string;
};
export async function POST(request: Request){
  try{
    const { newName }: PostRequestData = await request.json();
    await sql`INSERT INTO my_blog_category (category_name) VALUES (${newName});`;
    return NextResponse.json({ success: true }, { status: 200 });
  }catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}