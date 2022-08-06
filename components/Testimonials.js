import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section className="testimonials text-center App">
        <div className="container">
            <h2 className="mb-5">Opinión de nuestros clientes...</h2>
            <div className="row">
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <Image width={200} height={200}  className="img-fluid rounded-circle mb-1" src="/img/testimonials-1.jpg" alt="a" />
                        <h5>Margarita E.</h5>
                        <p className="font-weight-light mb-0">&quot;Los viajes han sido asombrosos y económicos!&quot;</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <Image width={200} height={200} className="img-fluid rounded-circle mb-1" src="/img/testimonials-2.jpg" alt="a" />
                        <h5>Fred S.</h5>
                        <p className="font-weight-light mb-0">&quot;He disfrutado bastante con mis amigos, los recomiendo sobre todo!&quot;</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <Image width={200} height={200} className="img-fluid rounded-circle mb-1" src="/img/testimonials-3.jpg" alt="a" />
                        <h5>Sarah W.</h5>
                        <p className="font-weight-light mb-0">&quot;Gracias a estos viajes he podido reencontrarme conmigo y mi familia&quot;</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials