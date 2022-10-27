import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Moneda from "./Moneda"

const Cuadricula = ()=>{

    const API_URL = import.meta.env.VITE_API_URL

    const[cryptos, setCryptos] = useState([])

    useEffect(()=>{
        axios.get(`${API_URL}assets`)
            .then((data)=>{
                //los datos estan en data.data.data
                setCryptos(data.data.data) 
            })
            .catch(()=>{
                console.error("Error en la peticiòn")
            })
    },[])


    return(
        <div className="app-container">
            <h1>Lista de Monedas</h1>
            <div className="crypto-container">
            {
                cryptos.map(({id, name, symbol, priceUsd, changePercent24Hr}) =>(
                    <Moneda
                        key={id}
                        name={name}
                        symbol={symbol}
                        priceUSD={priceUsd}
                        changePercent24Hr={changePercent24Hr}
                    />
                )) 
                
                
            }
            </div>
        </div>
    )
}

export default Cuadricula;