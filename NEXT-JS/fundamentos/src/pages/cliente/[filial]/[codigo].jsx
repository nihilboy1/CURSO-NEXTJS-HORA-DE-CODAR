import React from 'react'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

const Codigo = () => {
  const router = useRouter()
  return (
    <Layout>
      <h1
        style={{
          color: 'white'
        }}
      >
        {router.query.filial} {""} {router.query.codigo}
      </h1>
    </Layout>
  )
}

export default Codigo
