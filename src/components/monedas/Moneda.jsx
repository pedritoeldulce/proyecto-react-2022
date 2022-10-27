import "./Moneda.css"
const Moneda = ({name, symbol ,priceUSD, changePercent24Hr}) => {

    return(
        <>
            <div className="crypto">
                <h2>{name}</h2>
                <div className="info">
                    <p><span className="label">Precio:</span>{parseFloat(priceUSD).toFixed(4)}</p>
                    <p><span className="label">Còdigo:</span>{symbol}</p>
                                            
                    <p>
                            <span className="label">Cambio 24 horas:</span>
                        <span className={parseFloat(changePercent24Hr) > 0 ? "positivo": "negativo"} >{parseFloat(changePercent24Hr).toFixed(3)}%</span>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Moneda;