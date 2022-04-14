import React from 'react'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div>
      <h1>ERRO 404</h1>
      <p>Parece que essa página não existe...</p>
      <Link href={'/'}>HOME</Link>
    </div>
  )
}

export default NotFound
