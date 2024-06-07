import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import useThemeSwitcher from "./useThemeSwitcher";
import {
  HomeIcon,
  MoonIcon,
  ProjectsIcon,
  SunIcon,
  SupportIcon,
  UpdateIcon,
  UserIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] inline-block  bg-dark absolute w-0 left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light
        ${router.asPath === href ? "w-full" : "w-0"}`}
      ></span>
    </Link>
  );
};

const CustomMobileLink = ({ href, icon, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setHideNav(scrollPosition < currentScrollPos && currentScrollPos > 50);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full px-32 py-4 font-medium flex items-center justify-between dark:text-light lg:px-16 md:px-12 sm:px-5 z-20 transition-transform duration-300 ${hideNav ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-full justify-between items-center hidden lg:flex">
        <Logo />

        <div className="flex justify-center items-center ">
          <div>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className="mr-4  flex items-center justify-center p-1 border-none"
              aria-label="Dark Mode"
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </div>

          <div>
            <button
              className="flex-col justify-center items-center "
              aria-label="Menu Bar"
              onClick={handleClick}
            >
              <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-1.5 w-7 rounded-sm  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={` dark:bg-light block transition-all duration-300 ease-out rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-7 rounded-sm  ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center lg:hidden">
        <Logo />

        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/gallery" title="Blogs" className="mx-4" />
          <CustomLink href="/support" title="Contact" className="ml-4" />
        </nav>

        <nav className="flex">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="mr-4 flex items-center justify-center rounded-full p-1"
            aria-label="Dark Mode"
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>

          <button className="bg-black hover:bg-black/80 text-white text-md font-bold px-4 rounded dark:bg-light dark:text-dark">
            <a target="_blank" href="mailto:nextgen3.003@gmail.com">
              {" "}
              Say Hi,{" "}
            </a>
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 0.5,
          }}
          className="min-w-[50px] flex flex-col justify-between z-30 items-center fixed xl:right-24 lg:right-7 md:right-3 sm:-right-4 top-[15rem]  bg-light/30 backdrop-blur-lg dark:bg-light/10 rounded-full py-4"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              icon={<HomeIcon />}
              className="mb-6 sm:mb-3 dark:fill-light"
              aria-label="Home"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              icon={<UserIcon />}
              className="mb-10 sm:mb-7 text-2xl"
              aria-label="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              icon={<ProjectsIcon />}
              className="mb-10 sm:mb-7 text-2xl"
              aria-label="Projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/gallery"
              icon={<UpdateIcon />}
              className="mb-10 sm:mb-7 text-2xl"
              aria-label="Gallery"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/support"
              icon={<SupportIcon />}
              className="text-2xl"
              aria-label="Support"
              toggle={handleClick}
            />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
