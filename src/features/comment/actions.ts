import axios from 'axios'
import { Dispatch } from 'redux'
import {
  COMMENT_LIST_LOADING,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,
  COMMENT_DELETE_LOADING,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_FAIL,
} from './types'

export const GetComments = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: COMMENT_LIST_LOADING })
    // TODO: replace with server URL, use env
    const result = await axios(
      'https://my-json-server.typicode.com/typicode/demo/comments'
    )
    dispatch({ type: COMMENT_LIST_SUCCESS, payload: result.data })
  } catch (e) {
    dispatch({ type: COMMENT_LIST_FAIL })
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DeleteComment = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: COMMENT_DELETE_LOADING })
    // TODO: replace with server URL, use env
    // Simulating a failing request after 3 seconds
    await new Promise((res, rej) => {
      return setTimeout(rej, 3000)
    })
    dispatch({ type: COMMENT_DELETE_SUCCESS })
  } catch (e) {
    dispatch({ type: COMMENT_DELETE_FAIL })
  }
}
