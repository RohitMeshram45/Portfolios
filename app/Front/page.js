"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'


const Front = () => {
    return (
        <section className='grid gap-20 grid-cols-2 mt-9 overflow-hidden min-md:left-20 pb-4 mb-10 h-full  w-full'>
            <div className='relative left-[30%] max-xl:left-[30%] flex flex-col   mb-4'>
                <h1 className='drop-shadow-2xl Rohit max-sm:text-4xl text-6xl font-bold text-slate-700 mt-16'>Hii</h1>
                <h1 className='drop-shadow-2xl Rohit max-sm:text-4xl text-6xl font-bold text-slate-700 mt-5'>I Am <span className='max-sm:text-6xl text-blue-500 font-serif text-7xl'>Rohit</span> </h1>
                <h1 className='drop-shadow-2xl Rohit max-sm:text-6xl text-7xl font-bold text-blue-500 font-serif mt-5'>Meshram</h1>
                <pre className='Rohit max-sm:text-4xl md:text-5xl flex text-6xl max-sm:inline-block font-bold text-slate-700 mt-10 sticky '><span className='max-sm:hidden'>I Am a </span>
                    {
                        <Typewriter
                            className="inline"
                            options={{
                                strings: ['Web Devloper', 'React Devloper', "Coder", "Problem Solver"],
                                autoStart: true,
                                loop: true,
                            }}

                        />
                    }
                </pre>

                <div class="flex mt-10 ">
                    <motion.button whileHover={{ scale: [null, 1, 1.22] }}
                        transition={{ duration: 0.3 }} class="  font-bold inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Github</motion.button>
                </div>
            </div>
           <div whileHover={{ scale: [null, 1, 1.02] }}
           transition={{ duration: 0.4 }} className='flex justify-center items-center'>
            <img  className="hover:bg-slate-100 flex max-sm:hidden hover:shadow-2xl  max-sm:h-[340px] object-cover   rounded h-[340px] p-3 bg-contain sm:h-[340px]" src='man1.jpeg' />
            </div>
        </section>
    )
}

export default Front
