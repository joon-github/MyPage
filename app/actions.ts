'use server'
import { sql } from '@vercel/postgres';
import { queryPromise } from './api/mysql';
export async function addPost(formData:FormData,contents:string,post_id:string|null) {
  const title : any = formData.get('title');
  const sub_title : any = formData.get('sub_title');
  const tag_id : any = formData.get('tag_id');
  try{
    if(!post_id){
      let queryString = `
      INSERT INTO my_blog_post (title,contents,sub_title,tag_id) 
      VALUES ('${title}','${contents}','${sub_title}',1);`
      console.log(queryString)
      await queryPromise(queryString);  
    }else{
      console.log("b")
      let queryString =`
      UPDATE 
        my_blog_post
      SET
        title='${title}',
        contents='${contents}',
        sub_title='${sub_title}'
      WHERE
        post_id = ${post_id}
      `
      await queryPromise(queryString); 
    }
    return true
  }catch(e){
    console.log(e)
    return false
  }
}
