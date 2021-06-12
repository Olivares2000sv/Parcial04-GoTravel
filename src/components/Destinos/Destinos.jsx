import './Destinos.scss'
import listadoDestinos from '../helpers/listadoDestinos';

export default function Destinos(){

    return(
        <section>
            <h1>Destinos maravillosos</h1>
            <div className="destinos">
                {listadoDestinos.map((destino, index)=>(
                    <div className="destino" key={index}>
                        <div className="imagen" style={{background: `url('${destino.img}')`}}></div>
                        <div className="detalles"></div>
                        <p className="ciudad">{destino.destino}</p>
                        <p className="pais">{destino.pais}</p>
                        <p className="precio">desde<br />{destino.precio}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}