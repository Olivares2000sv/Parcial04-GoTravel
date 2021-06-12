import './Header.scss'

export default function Header(){
    return(
        <header>
            <div className="bienvenida">
                <h2>Viaja seguro, viaja con</h2>
                <h1>Go travel</h1>
            </div>
            <div className="formulario_vuelo">
                <h1>Reserva tu vuelo</h1>
                <form name="formulario" action="">
                    <div className="trayecto">
                        <p>¿A dónde te diriges</p>
                        <label htmlFor="origen">Origen</label>
                        <select name="origen" id="origen">
                            <option value="San Salvador">San Salvador</option>
                            <option value="Limerick">Limerick</option>
                            <option value="Londres">Londres</option>
                            <option value="Toronto">Toronto</option>
                            <option value="Machu Pichu">Machu Pichu</option>
                        </select>
                        <i class="fas fa-exchange-alt"></i>
                        <label htmlFor="destino">Destino</label>
                        <select name="destino" id="destino">
                            <option value="San Salvador">San Salvador</option>
                            <option value="Limerick">Limerick</option>
                            <option value="Londres">Londres</option>
                            <option value="Toronto">Toronto</option>
                            <option value="Machu Pichu">Machu Pichu</option>
                        </select>
                    </div>
                    <br />
                    <div className="fechas">
                        <p>¿Cuándo viajas?</p>
                        <label htmlFor="fecha_ida">Fecha ida</label>
                        <input type="date" id="fecha_ida" />
                        <i class="fas fa-exchange-alt"></i>
                        <label htmlFor="fecha_vuelta">Fecha vuelta</label>
                        <input type="date" id="fecha_vuelta" />
                    </div>
                    <br />
                    <div className="cantidad_personas">
                        <p>¿Cuántos viajan contigo?</p>
                        <div>
                            <label htmlFor="adultos">Adultos</label>
                                <select name="adultos" id="adultos">
                                    <option value="1">1 adultos</option>
                                    <option value="2">2 adultos</option>
                                    <option value="3">3 adultos</option>
                                    <option value="4">4 adultos</option>
                                    <option value="5">5 adultos</option>
                                </select>
                        </div>
                        <div>
                            <label htmlFor="menores">Menores</label>
                                <select name="menores" id="menores">
                                    <option value="1">1 menor</option>
                                    <option value="2">2 menores</option>
                                    <option value="3">3 menores</option>
                                    <option value="4">4 menores</option>
                                    <option value="5">5 menores</option>
                                </select>
                        </div>
                    </div>
                    <div className="boton_enviar">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </header>
    )
}