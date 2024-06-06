import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/ashiqbroupdate.png"
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'



const AanimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4000 })
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  })



  return <span ref={ref}></span>
}


export default function Home() {
  return (
    <>
      <Head>
        <title>AshiQur Rahman | About </title>
        <meta name="description" content="Available Services: Web Design, Web Development, Website Error Fix, Website Redesign, Website SEO, SEO,    Youtube Channel SEO, Youtube Video SEO" />
      </Head>



      <main className='flex w-full flex-col items-center justify-center'>

        <Layout className='pt-48 lg:pt-24 sm:pt-24'>

          <div className='flex items-center justify-between w-full pt-1 lg:pt-1  lg:flex-col '>

            <div className='w-1/2  h-auto rounded-2xl lg:pb-4 lg:w-2/3 md:w-full sm:w-full xs:w-full' >
              <Image src={profilePic} alt='devashiq' className='w-full h-auto rounded-2xl mb-6' priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw
              '
              />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ' >
              <h1 className='flex items-center mb-3 self-start font-bold text-3xl text-black/70 dark:text-light/70 lg:self-center md:text-3xl sm:text-xl'>Hello, Iʼm AshiQur Rahman</h1>
              <AnimatedText text="Frontend Web Developer." className='!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base dark:text-light/60 font-medium md:text-sm sm:text-xs'>
                Iʼm a passionate frontend web developer with a knack for creating impactful web solutions. With a focus on user-centered design and robust functionality, I thrive on turning ideas into engaging digital experiences. Letʼs build something amazing together!
              </p>

              <div className='flex items-center self-start mt-3 lg:self-center'>
                <Link href="/about"
                  className='flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light md:p-2 md:px-4 md:text-base hover:text-dark border-2 border-solid border-transparent hover:border-dark transition xs:text-sm'
                  download={true}
                > Download CV </Link>

                <Link href="https://wa.me/+8801932131373?"
                  className='flex items-center bg-dark text-light dark:bg-light dark:text-dark ml-4 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition md:p-2 md:px-4 md:text-base xs:text-sm'
                > Hire Me </Link>
              </div>


            </div>
          </div>

          <div className='grid grid-cols-12 gap-16 xs:gap-4 lg:gap-8 gap-y-16 items-center justify-between mt-32 lg:mt-24 xs:mt-16'>

            <div className='col-span-4 lg:col-span-6 md:col-span-6 xs:col-span-6  items-end justify-center text-dark dark:text-light rounded-lg px-8 py-4 border border-solid hover:bg-gray-100 dark:hover:bg-light/10 duration-300'>
              <span className='inline-block text-7xl font-bold cursor-pointer xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl'>
                <AanimatedNumbers value={30} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 lg:text-base md:text-sm sm:text-xs '>Completed Projects</h2>
            </div>


            <div className='col-span-4 lg:col-span-6 md:col-span-6 xs:col-span-6  items-end justify-center text-dark dark:text-light rounded-lg px-8 py-4 border border-solid hover:bg-gray-100 dark:hover:bg-light/10 duration-300'>
              <span className='inline-block text-7xl font-bold xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl'>
                <AanimatedNumbers value={10} />+
              </span>
              <h2 className='text-xl font-medium capitalize  text-dark/75 dark:text-light/75 lg:text-base md:text-sm sm:text-xs'>Company Projects</h2>
            </div>


            <div className='col-span-4 lg:col-span-6 md:col-span-6 xs:col-span-6  items-end justify-center text-dark dark:text-light rounded-lg px-8 py-4 border border-solid hover:bg-gray-100 dark:hover:bg-light/10 duration-300'>
              <span className='inline-block text-7xl font-bold xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl'>
                <AanimatedNumbers value={3} />+
              </span>
              <h2 className='text-xl font-medium capitalize  text-dark/75 dark:text-light/75 lg:text-base md:text-sm sm:text-xs'>Years Of Experience</h2>
            </div>

          </div>

        </Layout>

      </main>


      <main>
        <Layout className='lg:pt-12 xs:pt-12'>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  )
}
