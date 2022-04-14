import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'


const Users = (props) => {
  return (
    <div>
      {props.users.map(user => {
        
        return <Link href={"/profile/[id]"} as={`/profile/${user.id}`} passHref={true} key={user.id}><p >{user.name}</p></Link>
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = await resp.data
  return {
    props: {users: data}, // will be passed to the page component as props
  }
}

export default Users
