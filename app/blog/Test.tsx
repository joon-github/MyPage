'use client'
import React from 'react';

const Test = () => {
  const onClick = async () => {
    await fetch('/api/blog/category',{
      method:"POST",
      headers: {"Content-Type": "application/json",},
      body : JSON.stringify({newName: 'comment' }) 
    });
    console.log("aa")
  }
  return (
    <div onClick={onClick}>
      test
    </div>
  );
};

export default Test;