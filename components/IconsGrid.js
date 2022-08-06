import React from 'react'

const IconsGrid = () => {
  return (
    <section id='nosotros' className="features-icons bg-light text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon d-flex"><i className="bi bi-tsunami m-auto wave"></i></div>
                        <h3>Misión</h3>
                        <p className="lead mb-0">Somos una Agencia de Viajes que ofrece servicios de calidad y confiabilidad.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon d-flex"><i className="bi bi-stars m-auto star"></i></div>
                        <h3>Visión</h3>
                        <p className="lead mb-0">Proporcionar experiencias excepcionales de viajes y eventos mediante la creación de viajes inspiradores.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                        <div className="features-icons-icon d-flex"><i className="bi bi-image-alt m-auto mount"></i></div>
                        <h3>Valores</h3>
                        <p className="lead mb-0">Respeto al Medio Ambiente.</p>
                        <p className="lead mb-0">Honestidad. </p>
                        <p className="lead mb-0">Impacto social.</p> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default IconsGrid