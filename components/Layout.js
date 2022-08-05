import Head from 'next/head'
import Navbar from "./Navbar" 
import Footer from "./Footer"

const Layout = ({children, page}) => {
  return (
    <>
      <Head>  
        <link rel="icon" href="/ecoico.svg  " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>EcoLive  | {page}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>  
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" type="text/css" /> 
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" /> 
      </Head>
      <Navbar/>
      {children}
      <Footer/>
      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS-->
      <script src="js/scripts.js"></script> */}
      {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
      <!-- * *                               SB Forms JS                               * *-->
      <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
      <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </>
  )
}

export default Layout