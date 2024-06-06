import React from 'react';

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/home.webp"
import Web3 from "../../public/images/profile/ashiqbroupdate.png"
import Link from 'next/link'
import SocialIcons from '@/components/SocialIcons'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Projects from '@/components/Projects'

import { AiFillHtml5 } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { MdFindInPage } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { SiGoogleadsense } from 'react-icons/si';
import { BiSolidError } from 'react-icons/bi';




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



  return <span ref={ref}> &nbfc; </span>
}



export default function Home() {
  return (
    <>
      <Head>
        <title> AshiQur Rahman | Frontend Web Developer</title>
        <meta name="description" content="Available Services: Web Design, Web Development, Website Error Fix, Website Redesign, Website SEO, SEO, Youtube Channel SEO, Youtube Video SEO" />
      </Head>

      <main className='flex items-center text-dark dark:text-light m-auto min-h-screen sm:h-auto xs:h-auto'>
        <Layout className='py-0 sm:py-0 h-auto'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 flex flex-col items-center self-center lg:text-center lg:w-full lg:order-2'>
              <AnimatedText text="Hey👋 I'm a web developer ready to assist you!" className='text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl' />
              <p className='my-4 text-base dark:text-light/60 font-medium md:text-sm sm:text-xs'>
                As a skilled frontend web developer, I specialize in creating advanced web applications. Explore my recent projects and articles highlighting my Next.js and web development expertise.
              </p>

              <div className='flex items-center self-start mt-3 lg:self-center'>
                <Link href="https://wa.me/+8801932131373?" target={"_blank"}
                  className='flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition md:p-2 md:px-4 xs:text-sm md:text-base'
                  download={true}
                > Contact Me</Link>


                <Link className='ml-4 text-lg font-semibold capitalize text-dark dark:text-light p-2 px-6 border-2 border-dark dark:border-light rounded-lg hover:shadow-md md:p-2 md:px-4 md:text-base  transition xs:text-sm' href="/projects"> Recent Works </Link>
              </div>
            </div>

            <div className='w-1/2 h-auto rounded-2xl lg:w-2/3 md:w-full sm:w-full xs:w-full' >
              <Image src={profilePic} alt='devashiq' className='w-[100%] lg:w-full h-auto rounded-xl' priority
                sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw, 50vw
                  '
              />
            </div>

          </div>

        </Layout>

        <SocialIcons />
      </main>


      <main className='flex w-full flex-col items-center justify-center'>

        <Layout className='pt-0 lg:pt-32 sm:pt-0'>

          <h1 className='text-8xl font-bold text-dark/10 dark:text-light/20 rounded-2xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl'> Introduce</h1>

          <div className='flex items-center justify-between w-full pt-16 xs:pt-16 lg:flex-col'>

            <div className='w-1/2  h-auto rounded-2xl lg:w-full lg:mb-8' >
              <Image src={Web3} alt='devashiq' className='w-full h-auto rounded-2xl' priority
                sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw, 50vw
                  '
              />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ' >
              <h1 className='flex items-center mb-3 self-start font-bold text-3xl text-black/70 dark:text-light/70 lg:self-center md:text-3xl sm:text-xl'>Hello, Iʼm AshiQur Rahman</h1>
              <AnimatedText text="Frontend Web Developer." className='!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base dark:text-light/60 font-medium md:text-sm sm:text-xs'>
                Iʼm a dedicated frontend web developer with a passion for crafting engaging web experiences. With a focus on creating innovative solutions, Iʼm here to bring your digital ideas to life.
              </p>

              <div className='flex items-center self-start mt-3 lg:self-center'>
                <Link href="/about"
                  className='flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition md:p-2 md:px-4 md:text-base xs:text-sm'
                  download={true}
                > About More </Link>
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

      <main className='w-full items-center justify-center'>
        <Layout className='pt-16 lg:pt-0 sm:pt-0 '>

          <h1 className='text-8xl font-bold text-dark/10 dark:text-light/20 rounded-2xl  pb-20 sm:pb-10 xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl'> Services</h1>


          <ul
            role="list"
            className="grid max-w-full grid-cols-3 gap-6 lg:grid-cols-2 md:gap-y-6 xs:grid-cols-1 dark:text-light"
          >

            <li className="rounded-2xl border border-gray-200 dark:border-light-200 dark:border-light/20  p-5 group hover:bg-gray-100 dark:hover:bg-light/10 duration-300 cursor-pointer">

              <AiFillHtml5 className='h-8 w-8 text-dark/80 dark:text-orange-600' />

              <h1 className='pt-4 text-2xl font-bold sm:text-xl line-clamp-1'>Web Design</h1>

              <p className='pt-2 text-sm font-semi line-clamp-2'>
                I specialize in crafting exceptional web designs that place a strong emphasis on enhancing user experiences.
              </p>
            </li>

            <li className="rounded-2xl border border-gray-200 dark:border-light-200 dark:border-light/20  p-5 group hover:bg-gray-100 dark:hover:bg-light/10 duration-300 cursor-pointer">

              <MdDeveloperMode className='h-8 w-8 text-dark/80 dark:text-blue-500' />

              <h1 className='pt-4 text-2xl font-bold sm:text-xl line-clamp-1'>Web Development</h1>

              <p className='pt-2 text-sm font-semi line-clamp-2'>
                I specialize in crafting exceptional web designs that place a strong emphasis on enhancing user experiences.
              </p>
            </li>

            <li className="rounded-2xl border border-gray-200 dark:border-light-200 dark:border-light/20  p-5 group hover:bg-gray-100 dark:hover:bg-light/10 duration-300 cursor-pointer">

              <MdFindInPage className='h-8 w-8 text-dark/80 dark:text-green-500' />

              <h1 className='pt-4 text-2xl font-bold sm:text-xl line-clamp-1'>SEO Optimization</h1>

              <p className='pt-2 text-sm font-semi line-clamp-2'>
                I specialize in crafting exceptional web designs that place a strong emphasis on enhancing user experiences.
              </p>
            </li>

            <li className="rounded-2xl border border-gray-200 dark:border-light-200 dark:border-light/20  p-5 group hover:bg-gray-100 dark:hover:bg-light/10 duration-300 cursor-pointer">

              <BsYoutube className='h-8 w-8 text-dark/80 dark:text-red-600' />

              <h1 className='pt-4 text-2xl font-bold sm:text-xl line-clamp-1'>Youtube SEO</h1>

              <p className='pt-2 text-sm font-semi line-clamp-2'>
                I specialize in crafting exceptional web designs that place a strong emphasis on enhancing user experiences.
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 dark:border-light-200 dark:border-light/20  p-5 group hover:bg-gray-100 dark:hover:bg-light/10 duration-300 cursor-pointer">

              <SiGoogleadsense className='h-8 w-8 text-dark/80 dark:text-yellow-600' />

              <h1 className='pt-4 text-2xl font-bold sm:text-xl line-clamp-1'>Google AdSense</h1>

              <p className='pt-2 text-sm font-semi line-clamp-2'>
                I specialize in crafting exceptional web designs that place a strong emphasis on enhancing user experiences.
              </p>
            </li>

            <li className="rounded-2xl border border-gray-200 dark:border-light-200 dark:border-light/20  p-5 group hover:bg-gray-100 dark:hover:bg-light/10 duration-300 cursor-pointer">

              <BiSolidError className='h-8 w-8 text-dark/80 dark:text-yellow-300' />

              <h1 className='pt-4 text-2xl font-bold sm:text-xl line-clamp-1'>Error Fixing</h1>

              <p className='pt-2 text-sm font-semi line-clamp-2'>
                I specialize in crafting exceptional web designs that place a strong emphasis on enhancing user experiences.
              </p>
            </li>
          </ul>

        </Layout>
      </main>


      <main className='w-full flex flex-col items-center justify-center'>
        <Layout className='pt-16 lg:pt-0 sm:pt-0'>

          <h1 className='text-8xl font-bold text-dark/10 dark:text-light/20 rounded-2xl  pb-20 sm:pb-10 xl:text-5xl lg:text-6xl md:text-5xl sm:text-4xl'> Projects</h1>



          <Projects />

          <div className='mt-16 font-semibold flex gap-1 text-xl dark:text-light hover:ml-1 underline transition-all xs:text-sm xs:mt-8'>
            <Link href="/projects">See all projects</Link>
          </div>

        </Layout>
      </main>

    </>
  )
}
