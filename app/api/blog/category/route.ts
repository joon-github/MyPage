import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server'


type CategoryDatType = {
  category_name: string;
  category_id?: string;
};

export async function GET(request: Request) {
  try {
    const result =
      await sql`SELECT * FROM my_blog_category ORDER BY category_id ASC;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 });
  }
}


export async function POST(request: Request){
  try{
    const { category_name }: CategoryDatType = await request.json();
    await sql`INSERT INTO my_blog_category (category_name) VALUES (${category_name});`;
    return NextResponse.json({ success: true }, { status: 200 });
  }catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request){
  try{
    const { searchParams } = new URL(request.url);
    const category_id = searchParams.get('category_id');
    await sql`DELETE FROM my_blog_category WHERE category_id=${category_id};`;
    return NextResponse.json({ success: true }, { status: 200 });
  }catch(error){
    return NextResponse.json({ error }, { status: 500 });
  }
}


export async function PATCH(request: Request) {
  try {
    const {category_name,category_id}:CategoryDatType = await request.json();
    await sql`UPDATE my_blog_category SET category_name = ${category_name} WHERE category_id = ${category_id};`;
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}