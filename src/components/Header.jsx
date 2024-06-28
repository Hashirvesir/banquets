"use client";
import { useState, useEffect } from "react";
import MenuBtn from "./MenuBtn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Banquets", link: "/banquets" },
    { name: "Contact us", link: "/contact" },
  ];
  const [isDesktop, setIsDesktop] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Call handleResize once to set initial state
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variants = {
    open: {
      width: 280,
      height: 450,
      top: "-15px",
      right: "-10px",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 80,
      height: 40,
      top: "0px",
      right: "0px",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const perspective = {
    initial: { opacity: 0, rotateX: 90 },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      transition: { delay: 0.5 + i * 0.1 },
    }),
    exit: { opacity: 0 },
  };

  const btnAnimation = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { delay: 0.5 },
    },
    exit: { opacity: 0 },
  };

  return (
    <>
      <div className="w-full z-40 absolute mt-6 top-0 left-0">
        <div className="md:flex items-center z-20 justify-between px-6">
          <div className="h-[80px]">
            <span className="mr-1 pt-2">
              <Image src="/logo.png" width={140} height={140} className="w-[140px]" alt="" />
            </span>
          </div>
        
          {/* Conditionally render the ul element and sign-up button based on screen size */}
          {isDesktop && (
            <>
              <ul className="md:flex">
                {links.map((li) => (
                  <li
                    key={li.name}
                    className="md:ml-8 text-sm text-[#D1D1D1] hover:text-[#FFFFFF]"
                  >
                    <Link href={li.link}>{li.name}</Link>
                  </li>
                ))}
              </ul>

              <div
                className={`md:ml-8 text-sm md:my-0 my-7 mt-0  text-[#D1D1D1] hover:text-[#FFFFFF] `}
              >
                <button
                  type="button"
                  className={`text-white cazelFont bg-[#F00000] md:block hover:bg-red-800 focus:outline-none  rounded-xl text-sm md:px-6 px-4 py-3 text-center me-2 mb-2 dark:bg--[#F00000] dark:hover:bg-red-700 dark:focus:ring-red-900`}
                >
                  SIGN UP
                </button>
              </div>
            </>
          )}
          {/* mobile menu  */}
          <div className="fixed right-8 top-12  z-50 md:hidden">
            <motion.div
              variants={variants}
              animate={isActive ? "open" : "closed"}
              initial="closed"
              className="menu w-[280px] h-[450px] relative  bg-white rounded-2xl"
            >
              <AnimatePresence>
                {isActive && (
                  <div className="nav h-full pt-24 pl-10 pr-12 pb-10 box-border">
                    <div className="body">
                      {links.map((e, i) => (
                        <div key={i}>
                          <motion.div
                            variants={perspective}
                            animate="enter"
                            exit="exit"
                            custom={i}
                            initial="initial"
                          >
                            <Link
                              className="text-2xl
                            "
                              href={e.link}
                            >
                              {e.name}
                            </Link>
                          </motion.div>
                        </div>
                      ))}
                      <motion.button
                        type="button"
                        variants={btnAnimation}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className={`text-white cazelFont bg-[#F00000] md:block hover:bg-red-800 focus:outline-none  rounded-xl text-sm md:px-6 px-4 py-3 mt-6 text-center me-2 mb-2 dark:bg--[#F00000] dark:hover:bg-red-700 dark:focus:ring-red-900`}
                      >
                        SIGN UP
                      </motion.button>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
            <MenuBtn isActive={isActive} setIsActive={setIsActive} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
