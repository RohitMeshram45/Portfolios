"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
    return (
        <section className=" mt-16 bg-gradient-to-t from-cyan-100 to-cyan-250">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-500 dark:text-slate-500">Contact Us</h2>
                <p className="mb-8 lg:mb-16  semibold text-center font-semibold text-gray-700 dark:text-gray-600 sm:text-xl">Let's Connect With Me</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email@gmail.com" required />
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <motion.button whileHover={{ scale: [null, 1, 1.02] }}
                        transition={{ duration: 0.2 }} type="submit" className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message <BsFillSendFill /></motion.button>
                </form>
            </div>
        </section>
    )
}

export default Contact
