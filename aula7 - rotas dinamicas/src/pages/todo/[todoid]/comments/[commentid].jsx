import React from 'react'
import { useRouter } from 'next/dist/client/router'

const CommentId = () => {
  const router = useRouter()
  const todoid = router.query.todoid
  const commentid = router.query.commentid
  return (
    <>
      <div>
        <h1>COMMENT TODO</h1>
        <p>todo: {todoid}</p>
        <p>comment: {commentid}</p>
      </div>
    </>
  )
}

export default CommentId
