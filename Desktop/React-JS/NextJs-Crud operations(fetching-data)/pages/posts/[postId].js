import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import Link from "next/link";
function IndividualPost({ post }) {
  const router = useRouter();
  const path = router.query.postId;
  console.log(router.query.postId);

  return (
    <div style={{ margin: "5%" }}>
      <h3>Individual Post Detail of: {post.id}</h3>
      <div>
        {post.title}
        {post.body}
      </div>
      <br />
      <Link href="/posts" passHref>
        <button>Go back to posts</button>
      </Link>
    </div>
  );
}

export default IndividualPost;
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      {
        params: { postId: "4" },
      },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await axios.get(
    `http://localhost:3000/api/posts-data/${params.postId}`
  );
  return {
    props: {
      post: response.data,
    },
  };
}
