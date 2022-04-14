import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Todo = () => {
  const router = useRouter()
  const todoid = router.query.todoid
  return (
    <>
      <div>
        <h1>Tarefa: {todoid}</h1>
        <p>
          Comentário: kkk1
          <Link href={`/todo/${todoid}/comments/1`}>
            <a>Detalhes</a>
          </Link>
        </p>
        <p>
          Comentário: kkk2
          <Link href={`/todo/${todoid}/comments/2`}>
            <a>Detalhes</a>
          </Link>
        </p>
        <p>
          Comentário: kkk3
          <Link href={`/todo/${todoid}/comments/3`}>
            <a>Detalhes</a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default Todo
