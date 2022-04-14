import React from 'react'
import Layout from './Layout'

const Cabecalho = props => {
  return (
    <header>
      <h1>Fundamentos de Next.js e React.js</h1>
      <h2>{props.name}</h2>
      <Layout padding={"25px"}>
        <h1>layout inner html</h1>
      </Layout>
      <Layout backgroundColor={"blue"}>
        <h1>layout inner html</h1>
      </Layout>
    </header>
  )
}

export default Cabecalho
