import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <ul>
        <li>
          <Link href="/products">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
