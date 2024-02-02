"use client"
import React from 'react'
import { motion } from "framer-motion"
// import { Link } from 'react-router-dom'
import Link from 'next/link'
// import a from 'next/a'

const Header = () => {

  return (
    <header className="  bg-gradient-to-r from-cyan-200 to-blue-200 body-font border border-b-1 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

          <img className="max-sm:text-[26px] w-[20%] bg-blue-900 px-3 py-2 rounded-2xl ml-3 text-5xl font-extrabold sm:text-2xl text-white" src='images/Logo.png' />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center  text-base justify-center">

          <li className='list-none'>
            <Link href='/' scroll={true}>
              <motion.a whileHover={{ scale: [null, 1, 1.05] }} transition={{ duration: 0.2 }} className="mr-5 font-semibold text-xl hover:text-cyan-600">Home</motion.a>
            </Link>
          </li>
          <li className='list-none'>
            <Link href='/about' scroll={true}>
              <motion.a whileHover={{ scale: [null, 1, 1.05] }} transition={{ duration: 0.2 }} className="mr-5 font-semibold text-xl hover:text-cyan-600">About</motion.a>
            </Link>
          </li>
          <li className='list-none'>
            <Link href='/project'>
              <motion.a whileHover={{ scale: [null, 1, 1.05] }} transition={{ duration: 0.2 }} className="mr-5 font-semibold text-xl hover:text-cyan-600">Project</motion.a>
            </Link>
          </li>
          <li className='list-none'>
            <Link href='/contact'>
              <motion.a whileHover={{ scale: [null, 1, 1.05] }} transition={{ duration: 0.2 }} className="mr-5 font-semibold text-xl hover:text-cyan-600">Connect</motion.a>
            </Link>
          </li>

        </nav>
      </div>
    </header>
  )
}

export default Header
