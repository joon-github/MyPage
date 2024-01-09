'use server'
import { sql } from '@vercel/postgres';
export async function addPost(formData:FormData,contents:string,post_id:string|null) {
  const title : any = formData.get('title');
  const sub_title : any = formData.get('sub_title');
  const category_id : any = formData.get('category_id');
  try{
    if(!post_id){
      await sql`
      INSERT INTO my_blog_post (title,contents,sub_title,category_id) 
      VALUES (${title},${contents},${sub_title},${category_id});`
    }else{
      await sql`
      UPDATE 
        my_blog_post
      SET
        title=${title},
        contents=${contents},
        sub_title=${sub_title}
      WHERE
        post_id = ${post_id}
      `
    }
    return true
  }catch(e){
    console.log(e)
    return false
  }
}