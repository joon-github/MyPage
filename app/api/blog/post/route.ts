import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server'


type PostDataType = {
  post_id?: string;
  category_id: string;
  title: string;
  contents:string;
  create_at:string
};


export async function GET(request: Request) {
  try {
    const result =
      await sql`
        SELECT 
          * 
        FROM
         my_blog_post
         `
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 });
  }
}

