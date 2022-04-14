import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useApiManipulate from "../hooks/useApiManipulate";
function Home() {
  const {posts,addPost}=useApiManipulate()
  const [postAdded, setPostAdded] = useState(null);
  const router = useRouter();

  const submitHandler = (e) => {
    // methodPost(postAdded)
    e.preventDefault()
    addPost(postAdded)
    // async function postDataApi() {
    //   console.log(posts);
    //   axios.post("http://localhost:4000/posts", { title: posts });
    // }
    // postDataApi();
    // router.push("/posts");
  };
  const deletePostHandler = () => {
    // posts.pop()
    // console.log(posts)
    async function postDelete() {
      axios.delete("http://localhost:4000/posts/7");
    }
    postDelete();
  };
  // useEffect(() => {
  //   submitHandler();
  // }, []);
  return (
    <>
      <div>Home page!!!</div>
      <form onSubmit={submitHandler}>
        <label htmlFor="addNewPost">
          <input
            type="text"
            onChange={(event) => setPostAdded(event.target.value)}
          />
        </label>
        <button type="submit">Post</button>
        <button type="button" onClick={deletePostHandler}>
          Delete
        </button>
      </form>
      {console.log(posts)}
    </>
  );
}

export default Home;
