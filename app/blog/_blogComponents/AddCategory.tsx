"use client";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isManagerState } from "@/app/store/globalState";
import styles from "../blog.module.scss";
import Link from "next/link";

const AddCategory = () => {
  const [isClient, setIsClient] = useState(false);
  const isManager = useRecoilValue(isManagerState);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onClickAddCategory = async () => {
    const name = prompt(`카테고리 추가`);
    if (!name) return;
    try {
      await fetch(`/api/blog/tag`, {
        method: "POST",
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify({
          tag_name: name,
        }),
      });
    } catch (e) {
      throw e;
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    isManager && (
      <div className="flex gap-4">
        <Link href={"/blog/create"}>게시물 추가</Link>
        <button onClick={onClickAddCategory}>태그 추가</button>
      </div>
    )
  );
};

export default AddCategory;
