import React from 'react'
import { FacebookIcon, GithubIcon, HtmlIcon, LinkedInIcon, PinterestIcon, YouTubeIcon } from './Icons'

import { motion } from 'framer-motion'
import { BsInstagram } from 'react-icons/bs'






const SocialIcons = () => {
  return (
    <div className='absolute items-center right-8 bottom-1 flex flex-col justify-center overflow-hidden lg:hidden'>

      <motion.a href="https://www.facebook.com/nextdev2" target={'_blank'}
        whileHover={{y:-4}}
        whileTap={{scale:0.9}}
        className='w-6 mb-3 mt-3'
        aria-label="Facebook"
      >
        <FacebookIcon />
      </motion.a>

      
      <motion.a href="https://www.youtube.com/@CodeUnlocked0.2" target={'_blank'}
        whileHover={{y:-4}}
        whileTap={{scale:0.9}}
        className='w-6 mb-3'
        aria-label="Youtube"
      >
        <YouTubeIcon />
      </motion.a>

      <motion.a href="https://www.pinterest.com/codeunlocked001/" target={'_blank'}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}
            className='w-6 mb-3'
            aria-label="Pinterest"
      >
        <PinterestIcon />
      </motion.a>

      <motion.a href="https://github.com/codeunlocked2" target={'_blank'}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}
            className='w-6 mb-3'
            aria-label="Github"
      >
        <GithubIcon />
      </motion.a>

      <motion.a href="https://bd.linkedin.com/" target={'_blank'}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}
            className='w-6 mb-3 dark:text-dark '
            aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </motion.a>

      <span className='h-24 bg-dark dark:bg-light w-0.5'>

      </span>
    </div>
  )
}

export default SocialIcons