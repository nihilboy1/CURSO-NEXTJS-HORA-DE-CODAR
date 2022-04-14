import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
const Profile = props => {
  const router = useRouter()

  if (router.isFallback){
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <p>{props.user.id}</p>
      <p>{props.user.name}</p>
      <p>{props.user.username}</p>
    </div>
  )
}

export async function getStaticProps(context) {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/users', {
    params: { id: context.params.id }
  })
  const user = await resp.data[0]

  await new Promise(res => setTimeout(res, 4000))
  return {
    props: { user } // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
  const users = await resp.data.slice(0, 5)
  const paths = users.map(user => {
    return { params: { id: String(user.id) } }
  })

  return {
    paths: paths,
    fallback: true // false or 'blocking'
  }
}

export default Profile
