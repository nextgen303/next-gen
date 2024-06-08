import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import projectsData from "@/pages/api/projectsData";
import { motion } from "framer-motion";

const FeaturedProjects = ({ id, title, summary, img, link, review }) => {
  return (
    <motion.article
      initial={{ filter: "blur(10px)", y: 200 }}
      whileInView={{ y: 0, filter: "blur(0)", transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="w-full p-1 flex flex-col items-center justify-between rounded-2xl border border-solid border-dark/30 bg-light dark:border-light/20 dark:bg-[#5555550a] dark:backdrop-blur-sm hover:shadow-[5px_5px_0px_0px] dark:hover:shadow-[5px_5px_0px_0px_#fff] transition-all "
    >
      <Link
        href={`/${id}`}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border dark:border-none scale-100 rounded-2xl hover:scale-95 transition duration-500 cursor-pointer"
          priority
          sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between px-4 pb-3 pt-7">
        <Link
          href={`/${id}`}
          className="hover:underline underline-offset-2 transition-all"
        >
          <h1 className="w-full text-left dark:text-white text-3xl font-bold lg:text-2xl sm:text-xl line-clamp-1">
            {title}
          </h1>
        </Link>
        <p className="my-2 font-semibold text-dark/70 dark:text-light/70 md:text-sm line-clamp-2">
          <span className="text-xl xs:text-sm text-dark dark:text-light">
            Website Features:{" "}
          </span>
          {summary}
        </p>
        <div className="mt-3 flex items-center">
          <Link
            href={`/${id}`}
            className="bg-dark text-white dark:bg-light dark:text-dark py-2 shadow-2xl px-4 rounded-lg under font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition sm:text-sm"
          >
            Live Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>AshiQur Rahman | Projects</title>
        <meta
          name="description"
          content="Available Services: Web Design, Web Development, Website Error Fix, Website Redesign, Website SEO, SEO, Youtube Channel SEO, Youtube Video SEO"
        />
      </Head>
      <main className="w-full flex flex-col items-center justify-center">
        <Layout className="pt-40 sm:pt-36">
          <AnimatedText
            text="Completed Projects"
            className="!text-7xl text-start mb-20 xl:!text-6xl lg:!text-5xl md:!text-5xl sm:!text-3xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {Object.keys(projectsData)
              .slice(0, 2)
              .map((id) => (
                <div key={id} className="col-span-6 lg:col-span-12">
                  <FeaturedProjects
                    id={id}
                    title={projectsData[id].title}
                    summary={projectsData[id].summary}
                    img={projectsData[id].img}
                    link={projectsData[id].link}
                    review="/"
                    type="Featured Projects"
                  />
                </div>
              ))}
          </div>
          <AnimatedText
            text="Previous Projects"
            className="!text-6xl text-dark/10 dark:text-light/20 text-left mt-32 mb-12 xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {Object.keys(projectsData)
              .slice(2)
              .map((id) => (
                <div key={id} className="col-span-6 lg:col-span-12">
                  <FeaturedProjects
                    id={id}
                    title={projectsData[id].title}
                    summary={projectsData[id].summary}
                    img={projectsData[id].img}
                    link={projectsData[id].link}
                    review="/"
                    type="Featured Projects"
                  />
                </div>
              ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
