import { useState } from "react"
import { useEffect } from "react"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const[cryptos, setCryptos] = useState()

  useEffect(() => {
    fetch(`${API_URL}assets`)
      .then((resp) => resp.json())
      .then((data) => {
        setCryptos(data.data)
      })
      .catch(() => {
        console.error("La peticion fallò")
      })
  }, [])

  if (!cryptos) return <span>Cargando ...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
        <ol>
          {
            cryptos.map(({id, name, priceUsd})  => (
              <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
            ) )
          }
        </ol>
    </>
  )
}

export default App
