import React from 'react'
import Navbar from './Navbar'
import Footer from './Foot'
import Head from 'next/head'
import style from '../styles/Main.module.css'

const MainLayout = props => {
  return (
    <>
      <Head>
        <meta name="keywords" content="paginas de coisas"></meta>
        <meta name="description" content="as melhores cosias"></meta>
      </Head>
      <div className={style.main_box}>
        <Navbar />
        <main className={style.content_box}>{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
