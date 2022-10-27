import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Cuadricula from './monedas/Cuadricula.jsx'
import "./App.css"

function App() {

  /* const API_URL = import.meta.env.VITE_API_URL

  const[cryptos, setCryptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        console.log(data)
        setCryptos(data.data.data)
      })
      .catch(() => {
        console.error("La peticion fallò")
      })
  }, [])

  if (!cryptos) return <span>Cargando ...</span> */

  return (
    <>
      <Cuadricula/>
      {/* <h1>Lista de criptomonedas</h1>
        <ol>
          {
            cryptos.map(({id, name, priceUsd, rank})  => (
              <li key={id}>Nombre: {name} - Precio: {priceUsd} - rank {rank}</li>
            ) )
          }
        </ol> */}
    </>
  )
}

export default App
