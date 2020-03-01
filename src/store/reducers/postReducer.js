import { LOAD_POSTS, TOGGLE_BOOKED } from "../types";
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
    case TOGGLE_BOOKED:
      const allPost = state.allPosts.map(post => {
        if (post.id === action.payload) {
          post.booked = !post.booked;
        }
        return post;
      });
      return { ...state, allPost, bookedPost: allPost.filter(p => p.booked) };
    default:
      return state;
  }

  return state;
};
