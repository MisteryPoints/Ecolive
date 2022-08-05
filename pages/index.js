import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import IconsGrid from "../components/IconsGrid"
import ImageShowcase from "../components/ImageShowcase"
import Testimonials from "../components/Testimonials"
import Calls from "../components/Call"
import Layout from '../components/Layout'

export default function Home() {
  return ( 
    <Layout page='Inicio'> 
      <Header/>
      <IconsGrid/>
      <ImageShowcase/>
      <Testimonials/>
      <Calls/>
    </Layout> 
  )
}
