'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [menu, setMenu] = useState(false);
  const [switchLang, setSwithLang] = useState(false);

  useEffect(() => {
    setIsLoading(true)
  }, [])

  // navbar animation
  const variants = {
    open: { opacity: 0 },
    closed: { opacity: 1 }
  };

  const navbar = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -1000 }
  };

  const navItem = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 1000 }
  }


  return (
    <nav>

      {/*desktop view***********************************************/}
      <section className="hidden md:flex justify-between w-full px-5 py-5">
        <h3 className="font-agdasima text-3xl text-slate-100 tracking-wider">Moufid Sghiri</h3>
        {isLoading &&
          <ul className="font-spacemono text-[17px] flex items-center text-slate-100 tracking-wider space-x-4 lg:space-x-16">

            <motion.li initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: [0, 0.5, 1], y: 0 }}
              transition={{ duration: 0.05, delay: 0.2, ease: "easeOut" }}
              className="hover:tracking-[0.3em] w-20 text-center cursor-pointer duration-500">
              Work
            </motion.li >

            <motion.li initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: [0, 0.5, 1], y: 0 }}
              transition={{ duration: 0.05, delay: 0.6, ease: "easeOut" }}
              className="hover:tracking-[0.3em] w-36 text-center cursor-pointer duration-500">
              Services
            </motion.li >

            <motion.li initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: [0, 0.5, 1], y: 0 }}
              transition={{ duration: 0.05, delay: 1, ease: "easeOut" }}
              className="hover:tracking-[0.3em] w-32 text-center cursor-pointer duration-500">
              Contact
            </motion.li >

          </ul>
        }

        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.5, 0.8, 1] }}
          transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
          className="font-agdasima bg-slate-100 rounded-xl px-3 py-2 space-x-4 cursor-pointer"
          onClick={()=> setSwithLang(!switchLang)}>
          {switchLang ?
                        <p>
                          EN
                        </p>
                      :
                        <p>
                          FR
                        </p>
          }
        </motion.div>

      </section>



      {/*mobile view*************************************************/}
      <section className="md:hidden">

        <div className="flex items-center justify-between p-4">
          <h3 className="font-agdasima text-3xl text-slate-100 tracking-wider">Moufid Sghiri</h3>

          <div onClick={() => setMenu(!menu)} className="cursor-pointer">

            <div className="flex">
              <motion.div animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.01 }}
                className="rounded-md h-1 w-1 bg-slate-100">
              </motion.div>
              <motion.div animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.01, delay: 0.08 }}
                className="rounded-md h-1 w-1 mx-1 bg-slate-100">
              </motion.div>
              <motion.div animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.01, delay: 0.16 }}
                className="rounded-md h-1 w-1 bg-slate-100">
              </motion.div>
            </div>

            <div className="flex my-1">
              <motion.div animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.01, delay: 0.24 }}
                className="rounded-md h-1 w-1 bg-slate-100">
              </motion.div>
              <motion.div animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.01, delay: 0.32 }}
                className="rounded-md h-1 w-1 mx-1 bg-slate-100">
              </motion.div>
              <motion.div animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.01, delay: 0.40 }}
                className="rounded-md h-1 w-1 bg-slate-100">
              </motion.div>
            </div>

            <div className="flex">
              <motion.div animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.01, delay: 0.48 }}
                className="rounded-md h-1 w-1 bg-slate-100">
              </motion.div>
              <motion.div animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.01, delay: 0.56 }}
                className="rounded-md h-1 w-1 mx-1 bg-slate-100">
              </motion.div>
              <motion.div animate={menu ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.01, delay: 0.64 }}
                className="rounded-md h-1 w-1 bg-slate-100">
              </motion.div>
            </div>

          </div>
        </div>

        <AnimatePresence>
        <motion.div animate={menu ? "open" : "closed"}
          variants={navbar}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col items-center justify-center absolute top-0 w-screen h-screen bg-stone-950 z-40">

          <span onClick={() =>setMenu(false)} className="absolute top-8 right-8 text-slate-100 text-2xl cursor-pointer">&#10007;</span>

          <ul className="text-center font-spacemono text-lg text-slate-100 tracking-wider space-y-14">
            <motion.li animate={menu ? "open" : "closed"}
              variants={navItem}
              transition={{ duration: 0.08, delay: 1.3, ease: "easeInOut" }}
              className="hover:tracking-[0.3em] cursor-pointer duration-500">
              Work
            </motion.li >

            <motion.li animate={menu ? "open" : "closed"}
              variants={navItem}
              transition={{ duration: 0.08, delay: 1.6, ease: "easeInOut" }}
              className="hover:tracking-[0.3em] cursor-pointer duration-500">
              Services
            </motion.li >

            <motion.li animate={menu ? "open" : "closed"}
              variants={navItem}
              transition={{ duration: 0.08, delay: 1.9, ease: "easeInOut" }}
              className="hover:tracking-[0.3em] cursor-pointer duration-500">
              Contact
            </motion.li >
          </ul>

          <motion.div 
            animate={menu ? "open" : "closed"}
            variants={navItem}
            transition={{ duration: 0.1, delay: 2.5, ease: "easeInOut" }}
            className="font-agdasima bg-slate-100 rounded-xl px-3 py-2 mt-14 space-x-4 cursor-pointer">
            <span>EN</span>
            <span>FR</span>
          </motion.div>


        </motion.div>
        </AnimatePresence> 

      </section>

    </nav>
  )
}

export default Navbar