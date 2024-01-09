import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server'

type ContextType = {
  params :{
    post_id:string
  }
}

export async function GET(request: Request, {params:{post_id}}:ContextType) {
  try {
    const result =
      await sql`
        SELECT 
          A.*,
          B.category_name
        FROM
         my_blog_post AS A
        LEFT JOIN
          my_blog_category AS B
        ON
          A.category_id = B.category_id
        WHERE
          post_id = ${post_id}
        `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 });
  }
}

// export async function DELETE(request: Request){
//   try{
//     const { searchParams } = new URL(request.url);
//     const category_id = searchParams.get('category_id');
//     await sql`DELETE FROM my_blog_category WHERE category_id=${category_id};`;
//     return NextResponse.json({ success: true }, { status: 200 });
//   }catch(error){
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }


// export async function PATCH(request: Request) {
//   try {
//     const {category_name,category_id}:PatchRequestData = await request.json();
//     await sql`UPDATE my_blog_category SET category_name = ${category_name} WHERE category_id = ${category_id};`;
//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }