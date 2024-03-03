"use server";
import { queryPromise } from "./api/mysql";
export async function addPost(
  formData: FormData,
  contents: string,
  post_id: string | null
) {
  const title: any = formData.get("title");
  const sub_title: any = formData.get("sub_title");
  const tag_id: any = formData.get("tag_id");
  try {
    if (!post_id) {
      let queryString = `
      INSERT INTO my_blog_post (title,contents,sub_title,tag_id) 
      VALUES (?,?,?,?);`;
      await queryPromise(queryString, [title, contents, sub_title, tag_id]);
    } else {
      let queryString = `
      UPDATE 
        my_blog_post
      SET
        title=?,
        contents=?,
        sub_title=?
      WHERE
        post_id = ?
      `;
      await queryPromise(queryString, [title, contents, sub_title, post_id]);
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
