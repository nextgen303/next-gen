import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"

import Head from 'next/head'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {

useEffect( () => {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
}, [])

  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark max-w-auto mx-auto min-h-screen`}>  
          <Navbar />
            <Component {...pageProps} />
          <Footer />
        </main>
      </>
  )
}
