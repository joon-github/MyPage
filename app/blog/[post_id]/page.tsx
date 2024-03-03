"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import style from "./post.module.scss";
import dynamic from "next/dynamic";

export type DataType = {
  post_id: number;
  category_id: number;
  title: string;
  contents: string;
  create_at: string;
  sub_title: string;
  tag_name: string;
};
const Contents = dynamic(() => import("./_Components/Contents"), {
  ssr: false,
});

const PostDetailPage = () => {
  const { post_id }: { post_id: string } = useParams();
  const [data, setData] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (post_id) {
      const getData = async () => {
        try {
          setIsLoading(true);
          const postData = await fetch(`/api/blog/post/${post_id}`, {
            cache: "no-store",
          });
          const { rows: post }: { rows: DataType[] } = await postData.json();
          setData(post?.[0]);
        } catch (e) {
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      };
      getData();
    }
  }, [post_id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={style.main} id="blogContent">
      <Contents data={data} />
    </main>
  );
};

export default PostDetailPage;
