import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import project3 from "../../public/images/projects/project-03.png"
import project2 from "../../public/images/projects/project-02.png"

const FeaturedProjects = ({ title, summary, img, link }) => {
    return (
        <article className='w-full p-1 flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light dark:border-light/40 dark:bg-dark dark:backdrop-blur-sm hover:shadow-[5px_5px_0px_0px] dark:hover:shadow-[5px_5px_0px_0px_#fff] transition-all '>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto scale-100 rounded-2xl hover:scale-95 transition duration-500 cursor-pointer'
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
        </article>
    )
}


const Projects = () => {
    return (
        <div className=' grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-6 lg:col-span-12'>
                <FeaturedProjects
                    title="AI Web Application"
                    summary="User Authentication, New user Free Trail, AI ChatBot, Image Generator, Music Generator, Video Generator, Code Generator, User Support System, Simple Design, Responsive for all devices."
                    img={project3}
                    link="https://secret-ai.vercel.app/"
                    review="/"
                    type="Featured Projects"
                />
            </div>


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
        </div>
    )
}

export default Projects
