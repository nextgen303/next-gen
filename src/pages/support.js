import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';

const FeaturedProjects = ({ title, summary }) => {
    const [showSummary, setShowSummary] = useState(false);
  
    const toggleSummary = () => {
      setShowSummary(!showSummary);
    };
  
    return (
      <motion.article
        className="w-full flex flex-col items-center justify-between rounded-xl border border-solid border-dark p-4 dark:border-light/50 bg-light dark:bg-dark hover:shadow-[5px_5px_0px_0px] dark:hover:shadow-[5px_5px_0px_0px_#fff] transition-all"
      >
        <div
          className={`w-full text-left dark:text-light text-xl lg:text-xl sm:text-base font-semibold cursor-pointer`}
          onClick={toggleSummary}
        >
         {title}
        </div>
  
        {showSummary && (
          <motion.div
            className={`w-full flex flex-col items-start justify-between px-4 py-4 md:px-2 md:py-2 transition-opacity`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-semibold text-base text-dark/80 dark:text-light md:text-sm">
              <span className="text-dark dark:text-light">
              </span>{" "}
              <span className='font-semibold text-xl md:text-xl sm:text-base pr-3'>Answer: </span> {summary}
            </p>
          </motion.div>
        )}

        <motion.div
          className={`w-full transition-all`}
          style={{
            height: showSummary ? "12px" : "4px",
            opacity: showSummary ? 1 : 0,
          }}
          transition={{ delay: showSummary ? 0.3 : 0, duration: 0.5 }}
        />
      </motion.article>
    );
  };
  
const support = () => {
  return (
    <>
      <Head>
        <title>AshiQur Rahman | Support</title>
        <meta
          name="description"
          content="Available Services: Web Design, Web Development, Website Error Fix, Website Redesign, Website SEO, SEO, Youtube Channel SEO, Youtube Video SEO"
        />
      </Head>


      <main className="w-full flex flex-col items-center justify-center">
        <Layout className='pt-40 sm:pt-40'>
          <AnimatedText text="Help & Support" className="!text-7xl text-center xl:!text-5xl pb-28 sm:pb-16 lg:!text-6xl md:!text-5xl sm:!text-3xl" />

          <div className="grid grid-cols-12 w-full mx-auto relative gap-16 xl:gap-x-8 lg:gap-x-2 md:gap-y-8 sm:gap-x-0">
            <div className="col-span-12">
             <h1 className='font-bold  text-2xl sm:text-xl dark:text-light'> <span className='text-[#ff1f1f] text-3xl sm:text-xl' >Note:</span> Click on the box to see the questions answer.</h1>
            </div>

            <div className="col-span-6 lg:col-span-12">
              <FeaturedProjects title="Q: Do you provide website hosting and domain registration services?"
                summary="No, I do not provide website hosting and domain registration services. However, I can recommend some reliable hosting providers and help you set up your web application on the hosting platform." />
            </div>

            <div className="col-span-6 lg:col-span-12">
              <FeaturedProjects title="Q: Do you provide website hosting and domain registration services?"
                summary="No, I do not provide website hosting and domain registration services. However, I can recommend some reliable hosting providers and help you set up your web application on the hosting platform." />
            </div>


            <div className="col-span-6 lg:col-span-12">
              <FeaturedProjects title="Q: Do you provide website hosting and domain registration services?"
                summary="No, I do not provide website hosting and domain registration services. However, I can recommend some reliable hosting providers and help you set up your web application on the hosting platform." />
            </div>


            <div className="col-span-6 lg:col-span-12">
              <FeaturedProjects title="Q: Do you provide website hosting and domain registration services?"
                summary="No, I do not provide website hosting and domain registration services. However, I can recommend some reliable hosting providers and help you set up your web application on the hosting platform." />
            </div>


            <div className="col-span-6 lg:col-span-12">
              <FeaturedProjects title="Q: What kind of websites can you build?"
                summary="As a web developer, I have experience building a variety of websites, including personal websites, corporate websites, e-commerce sites, and more." />
            </div>

            <div className="col-span-6 lg:col-span-12">
              <FeaturedProjects title="Q: What kind of websites can you build?"
                summary="As a web developer, I have experience building a variety of websites, including personal websites, corporate websites, e-commerce sites, and more." />
            </div>

            <div className="col-span-6 lg:col-span-12">
              <FeaturedProjects title="Q: What kind of websites can you build?"
                summary="As a web developer, I have experience building a variety of websites, including personal websites, corporate websites, e-commerce sites, and more." />
            </div>

            <div className="col-span-6 lg:col-span-12">
              <FeaturedProjects title="Q: What kind of websites can you build?"
                summary="As a web developer, I have experience building a variety of websites, including personal websites, corporate websites, e-commerce sites, and more." />
            </div>
          </div>

        </Layout>
      </main>
    </>
  );
};

export default support;