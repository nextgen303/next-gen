import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details =({position, company, time, address, work}) => {
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] dark:text-light mx-auto flex flex-col items-center justify-between md:w-[80%]'>

    <LiIcon reference={ref} />

    <div>
      <h3 className='capitilize font-bold text-2xl sm:text-xl xs:text-base'>{position}&nbsp;{company} </h3>
      <span className='capitilize font-medium text-dark/75 dark:text-light/50 xs:text-sm'>
        {time} 
      </span>

      <p className="font-medium w-full xs:text-sm pt-4">
        {work}
      </p>
    </div>
  </li>
}

const Experience = () => {

  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
    }
  );

  return (
    <div className="my-64 xs:my-32">
      <h1 className='text-8xl font-bold text-dark/10 dark:text-light/20 rounded-2xl -mt-10 mb-32 xs:mb-16 lg:text-6xl md:!text-5xl sm:text-3xl'> Experience</h1>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9  top-1 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xl:left-[36px] xs:left-[18px]' />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full-stack Developr on" company="Fiverr" time="2022-present" work="My journey on Fiverr has empowered me to leverage this versatile skill set, enabling the creation of seamless, user-centric experiences tailored to fulfill the distinctive requirements of every client."
          />

          <Details
            position="Frontend Developer on" company="Fiverr" time="2020-2022"  work="Navigating the vibrant world of Fiverr for the past 2 years, I've woven my web development magic into projects that span across virtual realms."
          />

          <Details
            position="Junior Web Designer on" company="Graybo" time="2017-2020" work="Embarking on my web development journey at Graybo as a Junior Web Designer, I've embraced the world of creativity and code to craft captivating online experiences."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
