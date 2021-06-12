import './Footer.scss'

export default function Footer(){

    const anio = new Date().getFullYear();

    return(
        <footer>
            <div className="redes">
                <a href="#redsocial"><i class="fab fa-facebook"></i></a>
                <a href="#redsocial"><i class="fab fa-instagram"></i></a>
                <a href="#redsocial"><i class="fab fa-twitter"></i></a>
                <a href="#redsocial"><i class="fab fa-youtube"></i></a>
            </div>
            <p>©Go travel {anio} | Derechos reservados</p>
        </footer>
    )
}