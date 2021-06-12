import {useState} from 'react';
import {isEmpty, isEmail} from 'validator';
import './Formulario.scss'

export default function Formulario(){

    const[error, setError] = useState({
        estado: false,
        mensaje: ''
    });

    const[formulario, setFormulario] = useState({
        nombre: '',
        correo: '',
        fecha: ''
    })

    function capturarDatos(e){
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    function validarDatos(e){
        const {nombre, correo, fecha} = formulario;
        e.preventDefault();

        if(isEmpty(nombre) || isEmpty(correo) || isEmpty(fecha)){
            setError({
                estado: true,
                mensaje: 'Complete los campos'
            })
        } else {
            if(!isEmail(correo)){
                setError({
                    estado: true,
                    mensaje: 'Ingrese correo válido'
                })
            } else {
                setError({
                    estado: false,
                    mensaje: ''
                })
                setFormulario({
                    ...formulario,
                    nombre: '',
                    correo: '',
                    fecha: ''
                })
            }
        }
    }

    return(
        <>
            <div className="formulario">
                <h1>Si quieres que te mantengamos al día con las novedades de Go travel, llena el siguiente formulario. </h1>
                <form onSubmit={validarDatos}>
                    <div className="campo">
                        <label htmlFor="nombre">Nombre completo</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Andrés Olivares" value={formulario.nombre} onChange={capturarDatos} />
                    </div>
                    <div className="campo">
                        <label htmlFor="correo">Correo eléctronico</label>
                        <input type="email" id="correo" name="correo" placeholder="ejemplo@correo.com" value={formulario.correo} onChange={capturarDatos} />
                    </div>
                    <div className="campo">
                        <label htmlFor="fecha">Fecha de nacimiento</label>
                        <input type="date" id="fecha" name="fecha" value={formulario.fecha} onChange={capturarDatos} />
                    </div>
                    {error.estado && 
                    <div className="error">
                        <span>Error:</span> {error.mensaje}
                    </div>}
                    <div className="boton_enviar">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}