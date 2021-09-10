import Swal from 'sweetalert2'
import {
  COMMENT_LIST_FAIL,
  COMMENT_DELETE_FAIL,
  CommentActionTypes,
} from '../comment/types'

const initialState = {}

export default (state = initialState, action: CommentActionTypes) => {
  switch (action.type) {
    case COMMENT_LIST_FAIL:
      Swal.fire('Error!', 'Failed to load comments!', 'error')
      return state
    case COMMENT_DELETE_FAIL:
      Swal.fire('Error!', 'Failed to delete comment!', 'error')
      return state
    default:
      return state
  }
}
