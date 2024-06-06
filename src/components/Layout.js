import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light pt-24 p-32 sm:p-24  dark:bg-dark xl:px-24 lg:px-16 md:px-12 sm:px-5 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
