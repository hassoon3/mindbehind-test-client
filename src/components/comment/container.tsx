/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteComment, GetComments } from '../../features/comment/actions'
import { getComments } from '../../features/comment/selectors'
import CommentView from './view'

const CommentContaier: React.FC = () => {
  // eslint-disable-next-line no-debugger
  // debugger
  const dispatch = useDispatch()

  dispatch(GetComments())
  const onDelete = (id: number) => {
    dispatch(DeleteComment(id))
  }

  return (
    <Fragment>
      <CommentView commentSelector={getComments} onDelete={onDelete} />
    </Fragment>
  )
}

export default CommentContaier
