'use client'

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";


function RequestSendedModal({ setRequestSended, sendName }) {

    const modalRef = useRef();

    useEffect(() => {
        function handler(e) {
            if (!modalRef.current.contains(e.target)) {
                setRequestSended(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, []);


    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: .4 } }}
            className='fixed top-0 bottom-0 right-0 left-0 z-40 flex items-center justify-center'
        >

            <motion.div initial={{ scale: .5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { ease: "easeOut", duration: .3 } }}
                exit={{ scale: .5, opacity: 0, transition: { ease: "easeOut", duration: .3 } }}
                className="relative z-20 p-6 w-[85%] md:w-[60%] lg:w-[40%] bg-[#000000] text-slate-100 md:text-lg tracking-wide rounded-md"
                ref={modalRef}
            >

                <span onClick={() => setRequestSended(false)}
                    className="absolute top-1 right-2 text-xl font-semibold hover:text-[#a3e635] duration-300 cursor-pointer">
                    &#10007;
                </span>

                <h4 className="flex items-end mb-6 space-x-1">
                    <p className="text-2xl text-[#a3e635]">&#8517;</p>ear 
                    <p className="capitalize">{sendName}</p>
                </h4>
                
                <p className="mb-3">I wanted to extend my heartfelt gratitude for reaching out to discuss your project. Your interest and willingness to collaborate are truly appreciated.</p>

                <p>I will contact you shortly to further delve into the details and explore how we can make this project a success.</p>
                
                <div className="mt-6">
                    <p>Best regards,</p>
                    <p className="text-sm">Moufid Sghiri</p>
                </div>


        </motion.div>
        </motion.div >
    )
}

export default RequestSendedModal