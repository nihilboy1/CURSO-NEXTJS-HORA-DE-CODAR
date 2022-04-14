import { useState } from 'react'

export default function Home() {
  const [cliente, setCliente] = useState({})
  async function handleDados() {
    const id = document.getElementById('input')
    if (id.value) {
      const resp = await fetch(`http://localhost:3000/api/cliente/${id.value}`)
      const dados = await resp.json()
      setCliente(dados)
    }
  }
  return (
    <>
      <ul>
        <li>id: {cliente.id}</li>
        <li>nome: {cliente.nome}</li>
      </ul>
      <input id="input" type="number" />
      <button onClick={handleDados}>pegar dados</button>
    </>
  )
}
