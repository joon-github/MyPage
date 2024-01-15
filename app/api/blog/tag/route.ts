import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server'
import { queryPromise } from '../../mysql';


type TagDatType = {
  tag_name: string;
  tag_id?: string;
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
    const { tag_name }: TagDatType = await request.json();
    let queryString = `INSERT INTO my_blog_tag (tag_name) VALUES (?);`;
    await queryPromise(queryString,[tag_name]); 
    return NextResponse.json({ success: true }, { status: 200 });
  }catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request){
  try{
    const { searchParams } = new URL(request.url);
    const tag_id = searchParams.get('tag_id');
    let queryString = `DELETE FROM my_blog_tag WHERE tag_id=?;`;
    await queryPromise(queryString,[tag_id]); 
    return NextResponse.json({ success: true }, { status: 200 });
  }catch(error){
    return NextResponse.json({ error }, { status: 500 });
  }
}


export async function PATCH(request: Request) {
  try {
    const {tag_name,tag_id}:TagDatType = await request.json();
    let queryString = `UPDATE my_blog_tag SET tag_name = ? WHERE tag_id = ?;`;
    await queryPromise(queryString,[tag_name,tag_id]); 
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}