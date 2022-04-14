import React from 'react'
import Link from 'next/dist/client/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <li className={styles.li_item}>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </li>
      <li className={styles.li_item}>
        <Link href="/products">
          <a>PRODUCTS</a>
        </Link>
      </li>
      <li className={styles.li_item}>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </li>
      <li className={styles.li_item}>
        <Link href="/cadastro">
          <a>CADASTRO</a>
        </Link>
      </li>
    </nav>
  )
}

export default Navbar
