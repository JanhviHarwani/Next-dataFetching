import Link from "next/link";
import React from "react";

function Post({ post }) {
  return (
    <>
      <Link href={`/posts/${post.id}`}>
        <a>
       
          <h3 style={{textTransform:"uppercase"}}>{post.id}) {post.title}</h3>
          <h6>Tap to view more</h6>
        </a>
      </Link>
      {/* <div>{post.body}</div> */}
      <hr />
    </>
  );
}

export default Post;
