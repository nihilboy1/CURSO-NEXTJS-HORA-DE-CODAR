import React from 'react'
import Navbar from './Navbar'
import Footer from './Foot'
import style from '../styles/Main.module.css'

const MainLayout = props => {
  return (
    <div className={style.main_box}>
      <Navbar />
      <main className={style.content_box}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
