'use client'

import { AnimatePresence } from 'framer-motion';
import moment from 'moment/moment';
import { useState, useRef } from 'react';
import ContactModal from './ContactModal';
import RequestSendedModal from './RequestSendedModal';


function Contact() {

    let date = new Date();
    let today = moment(date).format('DD MMMM YYYY');

    const validEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');

    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const subjectRef = useRef();


    //handle mouse move
    const btnRef = useRef();

    const handleMouseMove = (e) => {
        const x = e.clientX - btnRef.current.offsetLeft;
        const y = e.clientY - btnRef.current.offsetTop;

        btnRef.current.style.setProperty("--x", x + "px");
        btnRef.current.style.setProperty("--y", y + "px");
    };

    
    //send request
    const [modal, setModal] = useState(false);
    const [requestSended, setRequestSended] = useState(false);
    const [msgErr, setmsgErr] = useState('');
    const [sendName, setSendName] = useState('');
    
    const sendRequest = () => {
        if(!name) {
            setmsgErr('Don\'t forget to fill in your name')
            setModal(true)
        }
        else if(!validEmail.test(email)) {
            setmsgErr('Invalid email address. Please check your entry')
            setModal(true)
        }
        else {
            setSendName(name)
            setRequestSended(true);
            setName('');
            nameRef.current.value = '';
            setEmail('');
            emailRef.current.value = '';
            setNumber('');
            numberRef.current.value = '';
            setSubject('');
            subjectRef.current.value = '';
        }
    };


    return (
        <div className='bg-paper rounded-3xl p-3 mx-5 md:mx-20'>

            <p className='text-end text-[#4b5563] mb-10 mt-2 mr-4'>{today}</p>

            <div className='text-md md:text-2xl leading-[40px] md:leading-[45px] px-5 md:px-8'>
                <p className='inline mr-2'>Hello my name is</p>

                <input type='name' placeholder='your full name' ref={nameRef}
                    onChange={(e) => setName(e.target.value)}
                    className='outline-none focus:ring-0 w-48 bg-transparent'
                />

                <p className='inline mx-2'>and i'm interested in discussing a potential project with you. To get in touch, you can reach me via email at</p>

                <input type='email' placeholder='your@email.com' ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    className='outline-none focus:ring-0 w-52 mr-1 bg-transparent'
                />

                <p className='inline mr-2'>or give me a call at</p>

                <input type='number' placeholder='your phone' ref={numberRef}
                    onChange={(e) => setNumber(e.target.value)}
                    className='outline-none focus:ring-0 w-52 mr-2 bg-transparent'
                />

                <p> Let me share some details about my project :</p>

                <textarea className='bg-transparent w-full h-fit outline-none resize-none overflow-hidden' 
                          placeholder="I'm looking ..."
                          ref={subjectRef}
                          onChange={(e) => setSubject(e.target.value)}
                >
                </textarea>
            </div>


            <div className='text-center mt-10'>
                <a className='btn bg-texture'
                   ref={btnRef}
                   onMouseMove={handleMouseMove}
                   onClick={sendRequest}
                >
                    <span>Send request</span>
                </a>
            </div>

        {/* Modal *********************************************************/}

        <AnimatePresence>
            {modal && <ContactModal setModal={setModal} msgErr={msgErr} />}
        </AnimatePresence>

        <AnimatePresence>
            {requestSended && <RequestSendedModal setRequestSended={setRequestSended} sendName={sendName} />}
        </AnimatePresence>

        </div>
    )
}

export default Contact