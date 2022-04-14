import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/Home.module.css"
import Image from "next/image"

export default function Home() {
  return (
    <>
    <div>
      <h1 className={styles.home_title}>HOME</h1>
      <Image src="/images/city.jpg" alt="Imagem de cidade" width="280px" height="350px"></Image>

    </div>
    </>
  )
}
