"use client"
import React from 'react'
import { motion } from "framer-motion";


const About = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-200 to-blue-200 text-gray-600 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">

      <motion.div whileHover={{ scale: [null, 1, 1.02] }}
          transition={{ duration: 0.4 }} className=" flex flex-col rounded-2xl lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className='flex justify-center'>
            <img className="hover:shadow-2xl  min-sm:h-[100px] object-contain rounded h-[100px] p-3 bg-contain sm:h-[100px]" src='React.png' />
            <img className="hover:shadow-2xl  min-sm:h-[100px] object-contain rounded h-[100px] p-3 bg-contain sm:h-[100px]" src='tailwind.png' />
            <img className="hover:shadow-2xl  min-sm:h-[100px] object-contain rounded h-[100px] p-3 bg-contain sm:h-[100px]" src='javascript.png' />
          </div> 
          <div className='flex justify-center'>
            <img className="hover:shadow-2xl  min-sm:h-[100px] object-contain rounded h-[100px] p-3 bg-contain sm:h-[100px]" src='html.png' />
            <img className="hover:shadow-2xl  min-sm:h-[100px] object-contain rounded h-[100px] p-3 bg-contain sm:h-[100px]" src='css.png' />
            <img className="hover:shadow-2xl  min-sm:h-[100px] object-contain rounded h-[100px] p-3 bg-contain sm:h-[100px]" src='nodejs.png' />
          </div>
          <div className='flex justify-center'>
            <img className="hover:shadow-2xl  min-sm:h-[100px] object-contain rounded h-[100px] p-3 bg-contain sm:h-[100px]" src='github.png' />
            <img className="hover:shadow-2xl  min-sm:h-[100px] object-contain rounded h-[100px] p-3 bg-contain sm:h-[100px]" src='vscode.png' />
            <img className="hover:shadow-2xl  min-sm:h-[100px] object-contain rounded h-[100px] p-3 bg-contain sm:h-[100px]" src='LeetCode.png' />
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: [null, 1, 1.02] }}
          transition={{ duration: 0.4 }} className=" rounded-md hover:bg-slate-200 origin-bottom-right shadow-2xl p-5 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-blue-400"> Who I Am

          </h1>
          <div><br className="hidden lg:inline-block mt-2" /> <span className='text-3xl  text-blue-400'>About Me ?</span></div>
          <p className="mb-8 leading-relaxed">Hello there! 👋 I'm Rohit Meshram, a final year student with a passion for web development. My journey into the world of coding has equipped me with a strong foundation in HTML, Tailwind CSS,JavaScript and ReactJs. I specialize in crafting responsive and visually appealing user interfaces..</p>
          <div className="flex justify-center">
            <motion.button whileHover={{ scale: [null, 1, 1.12] }}
              transition={{ duration: 1 }} href='https://drive.google.com/file/d/1qznOt0Y1IH8CeBnX7GViyI_-Zdsz5ysU/view?pli=1'  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download CV</motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
