import React from 'react'
import styles from '../../styles/estiloso.module.css'
import Cabecalho from '../../components/Header'
import Link from 'next/dist/client/link'

const Estiloso = props => {
  return (
    <>
      <Cabecalho name="samuel" />
      <Cabecalho />
      <div className={styles.red}>
        <h1>Estilo usando Módulos</h1>
      </div>
      <Link href={'/'}>To Home</Link>
    </>
  )
}

export default Estiloso
