import { CommentDto } from './dtos'

export const COMMENT_LIST_LOADING = 'COMMENT_LIST_LOADING'
export const COMMENT_LIST_SUCCESS = 'COMMENT_LIST_SUCCESS'
export const COMMENT_LIST_FAIL = 'COMMENT_LIST_FAIL'

export const COMMENT_DELETE_LOADING = 'COMMENT_DELETE_LOADING'
export const COMMENT_DELETE_SUCCESS = 'COMMENT_DELETE_SUCCESS'
export const COMMENT_DELETE_FAIL = 'COMMENT_DELETE_FAIL'

interface CommentDeleteLoadingAction {
  type: typeof COMMENT_DELETE_LOADING
}

interface CommentDeleteFailAction {
  type: typeof COMMENT_DELETE_FAIL
}

interface CommentDeleteSuccessAction {
  type: typeof COMMENT_DELETE_SUCCESS
}

interface CommentListLoadingAction {
  type: typeof COMMENT_LIST_LOADING
}

interface CommentListFailAction {
  type: typeof COMMENT_LIST_FAIL
}

interface CommentListSuccessAction {
  type: typeof COMMENT_LIST_SUCCESS
  payload: CommentDto[]
}

export type CommentActionTypes =
  | CommentDeleteLoadingAction
  | CommentDeleteFailAction
  | CommentDeleteSuccessAction
  | CommentListLoadingAction
  | CommentListFailAction
  | CommentListSuccessAction

export interface SystemState {
  comment: {
    loading: boolean
    comments: CommentDto[]
  }
}
