import {useState} from 'react';
import {Link} from 'react-router-dom';
import './MenuMovil.scss'

export default function MenuMovil(){

    const [menu, setMenu] = useState(false);

    function accionMenu (){
        setMenu(!menu);
    }

    return(
        <>
            <nav className="menuMovil">
                <div className="logo">
                    <h1>Go travel</h1>
                </div>
                <div className="btn" onClick={accionMenu}>
                    {menu ?
                        <i class="fas fa-times"></i>
                        :
                        <i class="fas fa-bars"></i>
                    }
                    
                </div>
            </nav>
            <div className={`enlacesMoviles ${menu ? 'activo' : ''}`}>
                <div className="perfilMovil">
                    <img src="/img/foto_perfil.jpg" alt="" className="foto" />
                    <div className="botoneraPerfil">
                        <button className="perfil">
                            <h1>Andrés Olivares</h1>
                        </button>
                        <button className="editar_perfil">
                            <h1>Editar perfil</h1>
                        </button>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about">Acerca de</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                </ul>
                <div className="cerrarSesion">
                    <i class="fas fa-sign-out-alt"></i>
                    <p>Cerrar sesión</p>
                </div>
            </div>
        </>
    );
}