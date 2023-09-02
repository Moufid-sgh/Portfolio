'use client'

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

function ContactModal({ setModal, msgErr }) {

  const modalRef = useRef();

  useEffect(() => {
    function handler(e) {
      if (!modalRef.current.contains(e.target)) {
        setModal(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, []);
  

  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: .4 } }}
      className='fixed right-0 bottom-4 left-0 z-50 flex items-center justify-center'>

      <motion.div
        initial={{ scale: .5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { ease: "easeOut", duration: .3 } }}
        exit={{ scale: .5, opacity: 0, transition: { ease: "easeOut", duration: .3 } }}
        className="relative z-20 bg-[#000000] text-slate-100"
        ref={modalRef}>

        <span onClick={() => setModal(false)} className="absolute top-1 right-2 text-xl font-semibold hover:text-[#a3e635] duration-300 cursor-pointer">&#10007;</span>
        <p className="font-chakra text-lg md:text-2xl py-4 md:py-7 px-8 md:px-16 mt-3">{msgErr}</p>


      </motion.div>
    </motion.div>
  )
}

export default ContactModal