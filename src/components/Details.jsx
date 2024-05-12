import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Details() {

    return (
        <div className='bg-[rgb(113,67,186)]'>
         <div className='max-w-[1240px] mx-auto py-12 grid md:grid-cols-3 gap-8 text-gray-300'>
            <div className='pl-5'>
        <div>
         <h1 className='w-full text-2xl md:text-3xl font-bold text-white'>Contact Information :</h1>
         <h2 className='w-full text-lg md:text-2xl  text-white'>Office Address :</h2>
         <p className='md:text text-sm'>118, Collin Street Kolkata 700016, <br/>  West Bengal.</p>
         <h3 className='w-full text-[15px] md:text-[18px]  text-white'>Email Address : <span className='md:text-[15px] text-[13px]'>md312582@gmail.com</span></h3>
         </div>
           <div className='flex justify-between w-[75%] py-6'> 
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaXTwitter size={30}/>
            <FaYoutube size={30}/>

           </div>

         </div>
         <div className='md:col-span-2 flex justify-between sm:gap-5 p-1'>  
         
         <div>
            <h className='font-medium text-gray-400'>Support</h>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documents</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
         </div >

         <div>
            <h className='font-medium text-gray-400'>Company</h>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
         </div>
         <div>
            <h className='font-medium text-gray-400'>Legal</h>
            <ul>
                <li className='py-2 text-sm'>Refund Policy</li>
                <li className='py-2 text-sm'>Privacy Ploicy</li>
                <li className='py-2 text-sm'>Terms and<br/> Condition</li>
                <li className='py-2 text-sm'> Contact Us</li>
            </ul>
         </div>

         </div>
         </div>
         </div>

    )

}