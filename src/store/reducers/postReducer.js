import { LOAD_POSTS } from "../types";
const initialState = {
  allPosts: [],
  bookedPost: []
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPost: action.payload.filter(post => post.booked)
      };
    default:
      return state;
  }

  return state;
};
