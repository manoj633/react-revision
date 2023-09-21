import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initalState = {
  loading: true,
  posts: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: {}, error: action.payload };
    default:
      return state;
  }
};

function DisplayPost() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) =>
        dispatch({ type: "FETCH_SUCCESS", payload: response.data })
      )
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: "Something went wrong" });
      });
  }, []);
  return (
    <>
      {state.loading ? <span>Loading....</span> : state.posts.title}
      {state.error ? state.error : null}
    </>
  );
}

export default DisplayPost;
