import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import Brand from "../../public/images/svgs/next-gen.svg";

const Logo = () => {
  return (
    <div className='relative flex items-center justify-center mt-2 text-3xl font-bold dark:text-light'>
      <Link href='/'> 
        <Image src={Brand} width={35} className='filter-invert-brightness dark:filter-none' alt="Brand Logo" />
      </Link>
    </div>
  );
};

export default Logo;
