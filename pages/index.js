import Head from 'next/head'
import Image from 'next/image'
import Footer from '../.next/components/footer'
import Navbar from '../.next/components/nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius in labore temporibus eveniet accusantium atque alias minus, sapiente voluptate aperiam veniam illo ducimus mollitia tempora delectus! Perferendis aliquam dolore eos.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius in labore temporibus eveniet accusantium atque alias minus, sapiente voluptate aperiam veniam illo ducimus mollitia tempora delectus! Perferendis aliquam dolore eos.</p>
      <Footer />
    </div>        
  )
}
