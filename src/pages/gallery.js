import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import sehlvet from "../../public/images/gallery/sehlvet.png"
import apple from "../../public/images/gallery/apple.png"
import secret from "../../public/images/gallery/secret-ai.png"
import transition from "../../public/images/gallery/next-transition.png"
import sellrs from "../../public/images/gallery/sellrs.png"
import levntura from "../../public/images/gallery/levntura.png"
import oneteam from "../../public/images/gallery/oneteam.png"
import dyshez from "../../public/images/gallery/dyshez.png"
import music from "../../public/images/gallery/music-1.png"
import login from "../../public/images/gallery/login.png"
import search from "../../public/images/gallery/search.png"

import { motion } from 'framer-motion'


const FeaturedUpdates = ({ img }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.7, ease: "easeIn" } }}
            viewport={{ once: true }}

            className='flex items-start h-auto w-full mx-auto p-1 gap-24 bg-light dark:bg-dark rounded-md transition-all mb-8'>
            <Image src={img} alt='Sehlvet website' className='w-full h-auto border border-dark/10 dark:border-white/30 rounded-md scale-100 hover:scale-95 transition duration-500 cursor-pointer'
                priority
                sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw, 50vw
                '
            />
        </motion.li>
    )
}


const gallery = () => {
    return (
        <>
            <Head>
                <title>AshiQur Rahman | Updates </title>
                <meta name="description" content="Available Services: Web Design, Web Development, Website Error Fix, Website Redesign, Website SEO, SEO,    Youtube Channel SEO, Youtube Video SEO" />
            </Head>
            <main className='w-full m-auto flex flex-col items-center justify-center overflow-hidden '>
                <Layout className='pt-40 sm:pt-36'>
                    <AnimatedText text="Project Showcase" className='!text-7xl text-left mb-16 xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl' />

                    <ul className='columns-3 md:columns-2 sm:columns-1 xs:columns-1'>
                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={sehlvet}
                        />

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={apple}
                        />

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={secret}
                        />


                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={transition}
                        />

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={sellrs}
                        />

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={levntura}
                        />

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={oneteam}
                        />

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={dyshez}
                        />

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={music}
                        />

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={login}
                        />

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            img={search}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default gallery


