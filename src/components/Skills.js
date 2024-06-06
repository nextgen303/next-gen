import React from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '../../public/lib/data';


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <>
      <h1 className='text-8xl font-bold text-dark/10 dark:text-light/20  -mt-10 mb-32 lg:mb-16  lg:text-7xl md:text-5xl sm:text-3xl'> Skills</h1>

      <div className='h-auto text-center'>
        <ul className='flex flex-wrap justify-center gap-9 lg:gap-8 md:gap-6 xs:gap-x-3'>
          {skillsData.map((skill, index) => (
          <motion.li
            className="border border-black shadow-[rgba(0,_0,_0,_0.02)_0px_25px_50px_-12px] bg-light dark:text-light dark:bg-dark dark:border dark:border-light/20  rounded-lg px-16 lg:px-12 md:px-6 py-3 cursor-pointer font-bold text-xl xl:text-xl lg:text-lg md:text-md sm:text-base xs:text-sm xs:px-3 xs:py-2 xs:rounded-md"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
        </ul>
      </div>

      
    </>
  )
}

export default Skills
