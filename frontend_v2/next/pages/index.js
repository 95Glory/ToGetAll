import Head from 'next/head'
import Main from '../components/Layout/Main/Main';
import Footer from '../components/Layout/Footer/Footer.js';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>ToGetAll</title>
        <meta name = "description" content='Generated by next app' />
        <link rel = 'icon' href='/fabicon.ico'></link>
      </Head>
      <Main/>
      <Footer />
    </div>
  )
};

export default Home;
