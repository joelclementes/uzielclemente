import React from "react"
import foto from "../assets/img/Uziel-01.png"
export default function Hero() {
    return (
        <div>
            <header className="hero">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-3 hero__picture">
                            <img src={foto} className="img-fluid rounded-all"
                                alt="Fotografía de Uziel Clemente Cruz" />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <div className="card-title hero__title"><span className="hero__title__cap">U</span>ZIEL <span
                                    className="hero__title__cap">C</span>LEMENTE <span className="hero__title__cap">C</span>RUZ
                                </div>
                                <div className="hero__subtitle">Diseñador Industrial</div>
                                <div className="hero__description">
                                    <p>Soy un diseñador industrial capaz de resolver problemas mediante el análisis de las
                                        necesidades de usuarios, equilibrando el beneficio y las soluciones entre todas las
                                        partes para la creación de productos. También cuento con experiencia en diseño
                                        editorial, fotografía de producto y diseño de calzado. Mi objetivo es llegar a ser líder
                                        de proyectos que requieran de un gran desempeño, conocimientos y trabajo en
                                        equipo, buscando siempre proseguir con mi formación profesional y personal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}