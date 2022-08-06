import React from 'react'

const Header = () => {
  return (
    <header className="masthead">
        <div className="container position-relative">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="text-center text-white">
                        {/* <!-- Page heading--> */}
                        <h1 className="mb-5">Donde los viajes de tus sueños se hacen Realidad!</h1>
                        {/* <!-- Signup form-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
                        <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            {/* <!-- Email address input--> */}
                            <div className="row">
                                <div className="col">
                                    <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Correo Electrónico" data-sb-validations="required,email" />
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">El Email es obligatorio.</div>
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">El Email no es valido.</div>
                                </div>
                                <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Enviar</button></div>
                            </div>
                            {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Información enviado de forma satisfactoria!</div>
                                    {/* <p>To activate this form, sign up at</p>
                                    <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a> */}
                                </div>
                            </div>
                            {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error enviando el mensaje!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header