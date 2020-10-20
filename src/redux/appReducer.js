import { GET_DATE } from "./type"

const initialState = {
  posts: [],
  show: false,
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATE:
      return {
        ...state,
        posts: action.posts,
        show: action.isShow,
      }
    default: return state    
  }
}

