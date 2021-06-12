import {useState, useRef} from 'react';
import './Galeria.scss'
import galeria from '../helpers/Galeria';

export default function Galeria(){

    const [lightbox, setLightbox] = useState(false);
    const imgLightbox = useRef();

    function capturarImagen(url){
        imgLightbox.current.setAttribute('src', url);
        accionLightbox()
    }

    function accionLightbox(url){
        setLightbox(!lightbox);
    }

    return(
        <>
            <div className={`lightbox ${lightbox ?  'activo' : ''}`} onClick={accionLightbox}>
                <span onClick={accionLightbox}><i class="fas fa-times"></i></span>
                <img src="/img/limerick_irlanda.jpg" alt="" ref={imgLightbox} />
            </div>
            <section className="galeria">
                <div className="informacion">
                    <h1>¿Quiénes somos?</h1>
                    <p>Somo una agencia de viajes, donde podrás adquirir tus vuelos a precios más economicos, también puedes adquirir paquetes especiales de turista, donde por medio de nosotros te contactamos con los hoteles de tu lugar de destino para conseguir mejores precios través de nuestra agencia.</p>
                </div>
                <h2>Vive experiencias únicas</h2>
                <div className="fotos">
                    {galeria.map((imagen, index)=>(
                        <div style={{background: `url('${imagen}')`}} key={index} onClick={()=>{capturarImagen(imagen)}}></div>
                    ))}
                </div>
            </section>
        </>
    );
}