import React from 'react'
import Link from 'next/dist/client/link'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>PRODUCTS</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
