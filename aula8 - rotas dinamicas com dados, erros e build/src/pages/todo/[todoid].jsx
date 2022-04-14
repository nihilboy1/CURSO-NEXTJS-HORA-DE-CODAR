import React from 'react'
import Link from 'next/link'

export async function getStaticProps(context) {
  const { params } = context

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoid}`
  )
  const todo = await res.json()

  return {
    props: {
      todo: todo
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  const paths = data.map(todo => {
    return {
      params: {
        todoid: `${todo.id}`
      }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}

const Todo = props => {
  return (
    <>
      <div>
        <h1>Tarefa: {props.todo.id}</h1>
        <h3>Texto: {props.todo.title}</h3>
        <p>
          Comentário: [...]
          <Link href={`/todo/${props.todo.id}/comments/1`}>
            <a> - Detalhes</a>
          </Link>
        </p>
        <p>
          Comentário: [...]
          <Link href={`/todo/${props.todo.id}/comments/2`}>
            <a> - Detalhes</a>
          </Link>
        </p>
        <p>
          Comentário: [...]
          <Link href={`/todo/${props.todo.id}/comments/3`}>
            <a> - Detalhes</a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default Todo
