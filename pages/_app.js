// add bootstrap css 
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import "../styles/card.css";
import "../styles/App.css";

function MyApp({ Component, pageProps }) {
  return ( 
      <Component {...pageProps} />   
  )
}

export default MyApp
