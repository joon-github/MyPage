import { NextResponse } from "next/server";
import { queryPromise } from "../../mysql";

type PostDataType = {
  post_id?: string;
  category_id: string;
  title: string;
  contents: string;
  create_at: string;
};

export async function GET() {
  let queryString =
    "SELECT post_id,title,sub_title,create_at  FROM my_blog_post order by create_at DESC";

  try {
    const rows = await queryPromise(queryString);
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

// export async function GET(request: Request) {
//   try {
//     const result =
//       await sql`
//         SELECT
//           *
//         FROM
//          my_blog_post
//         ORDER BY
//          create_at DESC
//          `
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     console.log(error)
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
