import Link from 'next/link'
import React from 'react'
import style from '../../styles/Todo.module.css'

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  return {
    props: { data } // will be passed to the page component as props
  }
}

const Todos = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className={style.todo_box}>
        <h1 className={style.title}>TAREFAS</h1>
        <ul>
          {data.map(item => {
            return (
              <Link href={`/todo/${item.id}`} passHref={true} key={item.id}>
                <li className={style.list_item}>{item.title}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Todos
