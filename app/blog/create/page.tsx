"use client";
import { isManagerState } from "@/app/store/globalState";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import { addPost } from "@/app/actions";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { DataType } from "../[post_id]/page";
import styles from "./create.module.scss";

import { useS3Upload, getImageData } from "next-s3-upload";
import Image from "next/image";
const Editor = dynamic(() => import("@/app/_base/Editor"), { ssr: false });
const Editor2 = dynamic(() => import("@/app/_base/Editor2"), { ssr: false });

interface CategoryType {
  tag_id: number;
  tag_name: string;
}

const page = () => {
  const [categorys, setCategorys] = useState([]);
  const router = useRouter();
  const isManager = useRecoilValue(isManagerState);
  const editorRef = useRef<any>(null);
  const searchParams = useSearchParams();
  const post_id = searchParams.get("post");
  const [data, setData] = useState<DataType | null>(null);
  useEffect(() => {
    if (post_id) {
      const getData = async () => {
        const postData = await fetch(`/api/blog/post/${post_id}`);
        const { rows: post }: { rows: DataType[] } = await postData.json();
        setData(post?.[0]);
      };
      getData();
    }
  }, [post_id]);
  useEffect(() => {
    if (!isManager) {
      router.push('/blog')
    }
  }, []);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("/api/blog/tag");
      const { rows } = await data.json();
      setCategorys(rows);
    };
    getData();
  }, []);
  const onSubmit = async (formData: FormData) => {
    const editorIns = editorRef.current.getInstance();
    const contentHtml = editorIns.getMarkdown();
    const submit = await addPost(formData, contentHtml, post_id);
    if (submit) {
      router.push("/blog");
    } else {
      alert("error");
      return;
    }
  };
  return (
    <div className="mt-[80px]">
      <form action={onSubmit} className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.inputWapper} style={{flex:1}}>
            <label>제목 : </label>
            <input style={{ width: "100%" }} defaultValue={data?.title} type="text" name="title" />
          </div>
          <div className={styles.inputWapper}>
            <label>설명 : </label>
            <input
              style={{ width: "100%" }}
              defaultValue={data?.sub_title}
              type="text"
              name="sub_title"
            />
          </div>
          <div className={styles.inputWapper}>
            <select name="tag_id">
              {categorys?.map((data: CategoryType) => {
                return (
                  <option key={data.tag_id} value={data.tag_id}>
                    {data.tag_name}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="submit">저장</button>
        </div>
        {post_id ? (
          <Editor editorRef={editorRef} initialValue={data?.contents} />
        ) : (
          <Editor2 editorRef={editorRef} />
        )}
      </form>
    </div>
  );
};

export default page;
