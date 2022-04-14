import axios from "axios";
import React, { useReducer, useEffect } from "react";
const initialState = {
  posts: [],
  loading: false,
  error: null,
};
const ACTIONS = {
  LOADING: "loading-state",
  ACTION_FETCH: "fetch-data",
  ERROR: "error-state",
  ACTION_POST: "post-data",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ACTION_FETCH:
      console.log("fetch",payload);
      return { ...state, posts:[...state.posts, payload], loading: false };
      break;

    case ACTIONS.ACTION_POST:
      console.log(payload);
      return { ...state,posts:[...state.posts, payload], loading: false };
      break;

    case ACTIONS.LOADING:
      return { ...state, loading: true };
      break;

    case ACTIONS.ERROR:
      return { ...state, error: payload };
      break;

    default:
      return state;
      break;
  }
}
function useApiManipulate(url) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.LOADING });
    axios
      .get(url)
      .then((response) => {
        console.log("get",response.data)
        dispatch({ type: ACTIONS.ACTION_FETCH, payload: response.data });
      })

      .catch((error) =>
        dispatch({ type: ACTIONS.ERROR, payload: error.error })
      );
    // console.log(response.data)

    // setPosts(response.data);
    // return response.data

    // fetchPostData();
  }, [url]);
  const addPost = (post) => {
    axios
      .post("http://localhost:4000/posts", { title: post })
      .then((response) => {
        console.log("from hook",response.data);
        dispatch({ type: ACTIONS.ACTION_POST, payload: response.data });
      });
  };

  // postDataApi();
  // router.push("/posts");

  return { state, addPost };
}

export default useApiManipulate;
