import {Link} from 'react-router-dom';

import './Menu.scss'

export default function Menu(){
    return(
        <>
            <nav className="menuEscritorio">
                <div className="logo">
                    <h1>Go travel</h1>
                </div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="about">Acerca de</Link>
                    </li>
                    <li>
                        <Link to="contact">Contacto</Link>
                    </li>
                </ul>
                <div className="perfilUser">
                    <img src="/img/foto_perfil.jpg" alt="" className="foto" />
                    <div className="botoneraPerfilDesk">
                        <button className="perfil">
                            <h1>Andrés Olivares</h1>
                        </button>
                        <button className="editar_perfil">
                            <h1>Editar perfil</h1>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}