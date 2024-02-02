"use client"
import React from 'react'
import { motion } from "framer-motion";


const Projects = () => {
    return (
        <> 
        <h2 className=" mb-5 mt-9 text-5xl tracking-tight font-extrabold text-center text-gray-500 dark:text-slate-500">Personal Projects </h2>
        <p className="mb-8 lg:mb-16  semibold text-center font-semibold text-gray-700 dark:text-gray-600 sm:text-xl">My Recent work</p>
        <section className='flex justify-center gap-28 max-sm:items-center  max-sm:flex-col'>
            <div></div>
            { /*<--firts part--> */}
            <motion.div   whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.4 }} 
                className=" hover:bg-slate-200  mb-10 border border-1 border-solid border-black max-sm:mb-5 max-sm:rounded-md  block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-300 ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src={"images/Portfolio.png"}
                         />
                </div>
                <div className="p-6 text-center font-semibold text-slate-900">
                    <h1 className='text-2xl'>Portfolio Website</h1>
                    <p className="text-base text-slate-800 dark:text-slate-800 mt-2">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
            </motion.div>
            { /*<--Secound part--> */}

            <motion.div   whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.4 }} 
            className="hover:bg-slate-200 mb-10 border border-1 border-solid border-black max-sm:mb-5 max-sm:rounded-md  block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-300 ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src={"images/Sorting.jpg"}
                        alt="" />
                </div>
                <div className="p-7 text-center font-semibold text-slate-900">
                    <h1 className='text-2xl'>Sorting Visualizer</h1>
                    <p className="text-base text-slate-800 dark:text-slate-800 mt-2">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
            </motion.div>
            { /*<--Third part--> */}

            <motion.div   whileHover={{ scale: [null, 1, 1.1] }}
            transition={{ duration: 0.3 }} 
            className="hover:bg-slate-200  mb-10 border border-1 border-solid border-black max-sm:mb-5 max-sm:rounded-md  block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-300 ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat bg-slate-400 p-2">
                    <img
                        className="rounded-t-lg"
                        src={'images/ecommerce.png'}
                        alt="" />
                </div>
                <div className="p-6 text-center font-semibold text-slate-900">
                    <h1 className='text-2xl font-semibold'>Ecommerce Website</h1>
                    <p className="text-base text-slate-800 dark:text-slate-800 mt-2">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
            </motion.div>

        </section>
        </>

    )
}

export default Projects
