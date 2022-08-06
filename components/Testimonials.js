import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials text-center App">
        <div className="container">
            <h2 className="mb-5">Opinión de nuestros clientes...</h2>
            <div className="row">
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="..." />
                        <h5>Margarita E.</h5>
                        <p className="font-weight-light mb-0">"Los viajes han sido asombrosos y económicos!"</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="..." />
                        <h5>Fred S.</h5>
                        <p className="font-weight-light mb-0">"He disfrutado bastante con mis amigos, los recomiendo sobre todo!"</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="..." />
                        <h5>Sarah W.</h5>
                        <p className="font-weight-light mb-0">"Gracias a estos viajes he podido reencontrarme conmigo y mi familia"</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials