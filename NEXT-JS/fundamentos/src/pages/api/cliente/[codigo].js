const client = (req, res) => {
  const codigo = req.query.codigo
  if (req.method === 'GET') {
    res.status(200).json({
      id: codigo,
      nome: `samu ${codigo}`,
    })
  }
  else{
    res.status(405).send()
  }
}

export default client
