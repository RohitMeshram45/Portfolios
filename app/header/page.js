"use client"
import React from 'react'
import {motion} from "framer-motion"

const Header = () => {

  return (
    <header className="  bg-gradient-to-r from-cyan-200 to-blue-200 body-font border border-b-1 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
          <img className="max-sm:text-[26px] w-[20%] bg-blue-900 px-3 py-2 rounded-2xl ml-3 text-5xl font-extrabold sm:text-2xl text-white" src='Logo.png'/>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center  text-base justify-center">
          <motion.a href='./contact/page' whileHover={{ scale: [null, 1, 1.05] }} transition={{ duration: 0.2 }} className="mr-5 font-semibold text-xl hover:text-cyan-600">Home</motion.a>
          <motion.a whileHover={{ scale: [null, 1, 1.05] }} transition={{ duration: 0.2 }} className="mr-5 font-semibold text-xl hover:text-cyan-600">About</motion.a>
          <motion.a whileHover={{ scale: [null, 1, 1.05] }} transition={{ duration: 0.2 }} className="mr-5 font-semibold text-xl hover:text-cyan-600">Project</motion.a>
          <motion.a whileHover={{ scale: [null, 1, 1.05] }} transition={{ duration: 0.2 }} className="mr-5 font-semibold text-xl hover:text-cyan-600">Connect</motion.a>

        </nav>
      </div>
    </header>
  )
}

export default Header
