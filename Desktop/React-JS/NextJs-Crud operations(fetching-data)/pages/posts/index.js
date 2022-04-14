import Post from "../../components/post";

import React from "react";

import useApiManipulate from "../../hooks/useApiManipulate";

function Posts() {
  const URL = "http://localhost:4000/posts";
  const { posts, loading, error } = useApiManipulate(URL);
console.log(posts)
  return (
    <>
      <h1 style={{ margin: "5%" }}>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {JSON.stringify(posts)}
      {/* {posts &&
        posts.map((obj) => {
          if (obj === undefined) {
            return;
          }
          return (
            <div style={{ margin: "8%" }} key={obj.id}>
              <Post post={obj} />
            </div>
          );
        })} */}

    </>
  );
}

export default Posts;
// http://localhost:3000/api/posts-data
// export function getStaticProps() {
//   const postsFetched = fetchPostData();

//   console.log(postsFetched);
//   return {
//     props: {
//       posts: postsFetched,
//     },
//   };
// }
