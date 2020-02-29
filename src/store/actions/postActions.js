import { LOAD_POSTS } from "../types";
import { DATA } from "../../data";

export const loadPosts = () => {
    console.log('loadPosts')
  return {
    type: LOAD_POSTS,
    payload: DATA
  };
};
