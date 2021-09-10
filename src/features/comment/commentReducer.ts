import {
  CommentActionTypes,
  COMMENT_LIST_FAIL,
  COMMENT_LIST_LOADING,
  COMMENT_LIST_SUCCESS,
} from './types'

const initialState = {
  comments: [],
}

export default (state = initialState, action: CommentActionTypes) => {
  switch (action.type) {
    case COMMENT_LIST_LOADING:
      return { ...state, loading: true, comments: [] }
    case COMMENT_LIST_SUCCESS:
      return { ...state, loading: false, comments: action.payload }
    case COMMENT_LIST_FAIL:
      return { ...state, loading: false, comments: [] }
    default:
      return state
  }
}
