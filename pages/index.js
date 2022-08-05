import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>  
        <link rel="icon" href="/ecoico.svg  " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecolive</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      </Head>
      <Layout> 
        <main className={styles.main}>
          
        </main>

        <footer className={styles.footer}>
          
        </footer>
      </Layout>
    </div>
  )
}
