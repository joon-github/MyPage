'use server'
import { sql } from '@vercel/postgres';

export async function addPost(formData:FormData) {
  const title : any = formData.get('title')||'';
  const contents : any = formData.get('contents')||'';
  const sub_title : any = formData.get('sub_title');
  try{
    const insertSql = await sql`
    INSERT INTO my_blog_post (category_id,title,contents,sub_title) 
    VALUES (5, ${title},${contents},${sub_title});`
  }catch(e){
    console.log(e)
  }
}