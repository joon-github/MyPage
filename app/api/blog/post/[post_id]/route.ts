import { queryPromise } from "@/app/api/mysql";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

type ContextType = {
  params: {
    post_id: string;
  };
};

export async function GET(
  request: Request,
  { params: { post_id } }: ContextType
) {
  let queryString = `
  SELECT 
    A.*,
    B.tag_name
  FROM
   my_blog_post AS A
  LEFT JOIN
    my_blog_tag AS B
  ON
    A.tag_id = B.tag_id
  WHERE
    post_id = ${post_id}
  `;

  try {
    const rows = await queryPromise(queryString);
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params: { post_id } }: ContextType
) {
  try {
    let queryString = `DELETE FROM my_blog_post WHERE post_id=${post_id};`;
    await queryPromise(queryString);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
