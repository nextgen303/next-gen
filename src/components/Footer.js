import React from 'react'
import Layout from './Layout'
import Logo from './Logo'
import { useRouter } from 'next/router'
import Link from 'next/link'


const CustomLink = ({ href, title, className=""}) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
    </Link>
  )
}

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid dark:border-light font-medium text-lg dark:text-light'>
      <Layout className='py-12 flex  md:flex-col-reverse items-start justify-between'>
          <div className='flex flex-col items-start md:mt-10 '>
            <Logo />

            <h3 className=' pt-6 text-lg xs:text-sm'>Contact:<span className='text-base hover:underline xs:text-sm '> +880 1932131373</span></h3>
            <h3 className=' pt-1 text-lg xs:text-sm'>Email:<span className='text-base hover:underline xs:text-sm '> codeunlocked001@gmail.com </span></h3>
            <span className='text-base xs:text-sm bg-dark text-light dark:bg-light dark:text-dark mt-5 px-3 py-1 rounded-sm '>
              {new Date().getFullYear()} &copy; All Rights Reserved
            </span>
          </div>

          <div className='flex flex-col text-base xs:text-sm'>
          <span className='text-xl font-bold pb-3 md:mt-5 sm:text-lg'>Quick Links</span>
            <CustomLink href="/" title='Home' className='hover:px-3 duration-150' />
            <CustomLink href="/about" title='About' className='pt-1 hover:px-3 duration-150' />
            <CustomLink href="/projects" title='Projects'className='pt-1 hover:px-3 duration-150'    />
            <CustomLink href="/updates" title='Updates' className='pt-1 hover:px-3 duration-150'  />
            <CustomLink href="/support" title='Support'className='pt-1 hover:px-3 duration-150'  />
          </div>

          <div className='flex flex-col text-base  xs:text-sm'>
          <span className='text-xl sm:text-lg font-bold pb-3'>Contact Info</span>
            <CustomLink href="https://wa.me/+8801932131373?`" title='Whats App' target='_blank'className='hover:px-3 duration-150' />
            <CustomLink href="https://m.me/${nextdev2}" target='_blank'title='Messenger' className='pt-1 hover:px-3 duration-150' />
            <CustomLink href="https://t.me/${nextdev2}" title='Telegram' target='_blank' className='pt-1 hover:px-3 duration-150'    />
            <CustomLink href="https://dribbble.com/code_unlocked" title='Dribbble' target='_blank' className='pt-1 hover:px-3 duration-150'  />
            <CustomLink href="https://www.instagram.com/code_unlocked/" title='Instagram' target='_blank' className='pt-1 hover:px-3 duration-150'  />
          </div>
      </Layout>
    </footer>
  )
}

export default Footer
