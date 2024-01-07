import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server'


type PostDataType = {
  post_id?: string;
  category_id: string;
  title: string;
  contents:string;
  create_at:string
};


// export async function POST(request: Request){
//   try{
//     const { category_name }: PatchRequestData = await request.json();
//     await sql`INSERT INTO my_blog_category (category_name) VALUES (${category_name});`;
//     return NextResponse.json({ success: true }, { status: 200 });
//   }catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

