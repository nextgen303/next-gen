import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import project1 from "../../public/images/projects/project-3.png"
import project2 from "../../public/images/projects/project-02.png"
import project3 from "../../public/images/projects/project-03.png"
import project4 from "../../public/images/projects/project4.png"
import project5 from "../../public/images/projects/project5.png"
import project6 from "../../public/images/projects/mega.png"
import project7 from "../../public/images/projects/sehlvet.png"
import project8 from "../../public/images/projects/sellrs.png"
import project9 from "../../public/images/projects/levntura.png"
import project10 from "../../public/images/projects/one-team.png"



import { motion } from 'framer-motion'



const FeaturedProjects = ({ type, title, summary, img, link, review }) => {
    return (
        <motion.article

            initial={{ filter: 'blur(10px)', y: 200 }}
            whileInView={{ y: 0, filter: 'blur(0)', transition: { duration: 0.5 } }}
            viewport={{ once: true }}


            className='w-full p-1 flex flex-col items-center justify-between rounded-2xl border border-solid border-dark/30 bg-light dark:border-light/20 dark:bg-[#5555550a] dark:backdrop-blur-sm hover:shadow-[5px_5px_0px_0px] dark:hover:shadow-[5px_5px_0px_0px_#fff] transition-all '>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto border dark:border-none scale-100 rounded-2xl hover:scale-95 transition duration-500 cursor-pointer'
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw, 50vw
                  '

                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between px-4 pb-3 pt-7'>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2 transition-all'>
                    <h1 className='w-full text-left dark:text-white text-3xl font-bold lg:text-2xl sm:text-xl line-clamp-1'> {title} </h1>
                </Link>

                <p className='my-2 font-semibold text-dark/70 dark:text-light/70 md:text-sm line-clamp-2'> <span className='text-xl xs:text-sm text-dark dark:text-light'>Website Features: </span> {summary} </p>

                <div className='mt-3 flex items-center'>
                    <Link href={link} target='_blank' className=' bg-dark text-white dark:bg-light dark:text-dark py-2 shadow-2xl px-4 rounded-lg under font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition sm:text-sm'> Live Project </Link>
                </div>
            </div>
        </motion.article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>AshiQur Rahman | Projects </title>
                <meta name="description" content="Available Services: Web Design, Web Development, Website Error Fix, Website Redesign, Website SEO, SEO,    Youtube Channel SEO, Youtube Video SEO" />
            </Head>


            <main className='w-full flex flex-col items-center justify-center'>
                <Layout className='pt-40 sm:pt-36'>
                    <AnimatedText text="Completed Projects" className='!text-7xl text-start mb-20 xl:!text-6xl lg:!text-5xl md:!text-5xl sm:!text-3xl' />
                    <div className=' grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-6 lg:col-span-12'>
                            <FeaturedProjects
                                title="Music Web Appliaction"
                                summary="User Authentication, Upload Song, Search Song, Play Songs, Liked Song System, Add to Favourite List Function, Volume Button, Next/Previous Song, Super Fast, Admin Control Pannel, Responsive for all Devices."
                                img={project2}
                                link="https://nextgen-music.vercel.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>

                        <div className='col-span-6 lg:col-span-12 '>
                            <FeaturedProjects
                                title="Mega - Mega Group Company"
                                summary="Animated Preloader, Custom Cursor, High resulation background video, Parallax Scroll, Animated Buttons, Animated Slider & also fully Responsive for all Devices"
                                img={project6}
                                link="https://mega-blue.vercel.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>
                    </div>

                    <AnimatedText text="Previous Projects" className='!text-6xl text-dark/10 dark:text-light/20 text-left mt-32 mb-12 xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-6 lg:col-span-12'>
                            <FeaturedProjects
                                title="Secret Ai - AI Web Application"
                                summary="User Authentication, New user Free Trail, AI ChatBot, Image Generator, Music Generator, Video Generator, Code Generator, User Support System, Simple Design, Responsive for all devices."
                                img={project3}
                                link="https://secret-ai.vercel.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>


                        <div className='col-span-6 lg:col-span-12'>
                            <FeaturedProjects
                                title="Apple - Mobile Shop Website"
                                summary="Simple Design, Just Frontend, E-commerce Website, Fully Responsive for all devices, Home Page, Blog Page, And all Product Show Page."
                                img={project1}
                                link="https://project-apple-shop.netlify.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>


                        <div className='col-span-6 lg:col-span-12'>
                            <FeaturedProjects
                                title="Image Transition"
                                summary="This is a cool Image Transition Effect when mouse on the image, The image size changed."
                                img={project4}
                                link="https://image-transition-three.vercel.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>


                        <div className='col-span-6 lg:col-span-12'>
                            <FeaturedProjects
                                title="Sellrs - Providing a leading comparison platform."
                                summary="Simple & professional design, Offical Ui, Cool Box Shadow, Just Home page, fully responsive for all devices."
                                img={project8}
                                link="https://sellrs-beta.vercel.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>


                        <div className='col-span-6 lg:col-span-12'>
                            <FeaturedProjects
                                title="Sehlvet- Woman's Clothing Ecommerce Website"
                                summary="Simple Design, Just Frontend, E-commerce Website, Fully Responsive for all devices, Just Home Page."
                                img={project7}
                                link="https://sehlvet.vercel.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>

                        <div className='col-span-6 lg:col-span-12'>
                            <FeaturedProjects
                                title="Dyshez - Resturent Landing Page Design"
                                summary="Simple Design, Just Frontend, E-commerce Website, Fully Responsive for all devices, Just Home Page."
                                img={project5}
                                link="https://dyshez-woad.vercel.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>


                        <div className='col-span-6 lg:col-span-12'>
                            <FeaturedProjects
                                title="Levntura- Converting studies
                                into adventures"
                                summary="Video background, Prallax header, Clients Slider, Gellery Slider, Creative Ui/Ux, Brand Logo, Cool color combination, Frontend, Travel Website, Fully Responsive for all devices, Just Home Page."
                                img={project9}
                                link="https://levntura-five.vercel.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>


                        <div className='col-span-6 lg:col-span-12'>
                            <FeaturedProjects
                                title="One Team - Business Process and Consulting Automation"
                                summary="Creative Ui/Ux, Brand Logo, Cool color combination, Frontend, Business Website, Fully Responsive for all devices, Just Home Page."
                                img={project10}
                                link="https://one-team-zeta.vercel.app/"
                                review="/"
                                type="Featured Projects"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects


