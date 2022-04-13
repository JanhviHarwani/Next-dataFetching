import React from "react";
import Post from "../../components/post";
import axios from "axios";
import Link from "next/link";
import { useState } from "react/cjs/react.production.min";
import useApiManipulate from "../../hooks/useApiManipulate";

function Posts({ posts }) {
  return (
    <>
      <h1 style={{ margin: "5%" }}>Posts</h1>
      {posts.map((obj) => {
        if (obj === undefined) {
          return;
        }
        return (
          <div style={{ margin: "8%" }} key={obj.id}>
            <Post post={obj} />
          </div>
        );
      })}
      ;
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3000/api/posts-data");

  console.log(response.data);
  return {
    props: {
      posts: response.data,
    },
  };
}
