import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server'
import { queryPromise } from '../../mysql';


type CategoryDatType = {
  category_name: string;
  category_id?: string;
};

export async function GET(request: Request) {
  try {
    let queryString = `SELECT * FROM my_blog_tag;`;
    const rows = await queryPromise(queryString);  
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 });
  }
}


export async function POST(request: Request){
  try{
    const { category_name }: CategoryDatType = await request.json();
    let queryString = `INSERT INTO my_blog_tag (category_name) VALUES (${category_name});`;
    await queryPromise(queryString); 
    return NextResponse.json({ success: true }, { status: 200 });
  }catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request){
  try{
    const { searchParams } = new URL(request.url);
    const category_id = searchParams.get('category_id');
    let queryString = `DELETE FROM my_blog_tag WHERE category_id=${category_id};`;
    await queryPromise(queryString); 
    return NextResponse.json({ success: true }, { status: 200 });
  }catch(error){
    return NextResponse.json({ error }, { status: 500 });
  }
}


export async function PATCH(request: Request) {
  try {
    const {category_name,category_id}:CategoryDatType = await request.json();
    let queryString = `UPDATE my_blog_tag SET category_name = ${category_name} WHERE category_id = ${category_id};`;
    await queryPromise(queryString); 
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}