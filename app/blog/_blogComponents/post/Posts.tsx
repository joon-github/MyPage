"use client";
import React, { useEffect, useState } from "react";
import { baseUrl } from "@/app/utils/baseUrl";
import blogStyles from "@/app/blog/blog.module.scss";
import Post from "./Post";

export type PostType = {
  post_id: number;
  category_id: number;
  title: string;
  sub_title: string;
  contents: string;
  create_at: string;
};

const fetchPosts = async () => {
  const postsData = await fetch(`${baseUrl}/api/blog/post`, {
    cache: "force-cache",
  });
  const { rows: posts } = await postsData.json();
  const newData: any = {};
  posts?.forEach((data: PostType) => {
    const year = data.create_at.slice(0, 4);
    if (newData[year]) {
      newData[year].push(data);
    } else {
      newData[year] = [data];
    }
  });

  return newData;
};

const Posts = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const newData = await fetchPosts();
      setData(newData);
    };
    getData();
  }, []);

  return (
    <div className={blogStyles.postsWrapper}>
      {Object.keys(data).map((key: string) => {
        const postData: PostType[] = data[key];
        return <Post key={key} data={postData} year={key} />;
      })}
    </div>
  );
};

export default Posts;
