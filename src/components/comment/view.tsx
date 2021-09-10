/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { CommentDto } from '../../features/comment/dtos'
import { SystemState } from '../../features/comment/types'

type CommentProps = {
  commentSelector: (state: SystemState) => CommentDto[]
  onDelete: (id: number) => void
}

const CommentView: React.FC<CommentProps> = ({ commentSelector, onDelete }) => {
  const comments = useSelector(commentSelector)

  const commentListItems = comments.map((c) => (
    <li>
      <div
        role="button"
        onClick={() => onDelete(c.id)}
        onKeyDown={() => onDelete(c.id)}
        tabIndex={0}
      >
        {c.body}
      </div>
    </li>
  ))

  return (
    <Fragment>
      <h1>Comments</h1>
      <ul>{commentListItems}</ul>
    </Fragment>
  )
}

export default CommentView
