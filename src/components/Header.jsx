import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


export default function Header() {
    const[toggle,setToggle] = useState(false);

    return (
        <div className=' bg-[rgb(113,67,186)] p-4'>
        <div className=' items-center max-w-[1240px] py-[15px] flex justify-between  mx-auto'>
         <div className='text-3xl font-bold'> 
            EdTech
         </div>
        {
             
            toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white test-2xl md:hidden block'/>
              :
              <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white test-2xl md:hidden block'/>
    
        }

          
        
         <ul className=' hidden md:flex text-white gap-10'>
            <li>
                Home
            </li>

            <li>
                company
            </li>

            <li>
                Resources
            </li>

            <li>
                About
            </li>

            <li>
                Contact
            </li>
         </ul>

         {/* Responsive menu */}

         <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-[#05051a] top-[92px] 
                ${toggle ? 'left-[0]' : 'left-[-100%]'} 
                `}>
            <li className='p-5 cursor-pointer'>
                Home
            </li>

            <li className='p-5 cursor-pointer'>
                company
            </li>

            <li className='p-5 cursor-pointer'>
                Resources
            </li>

            <li className='p-5 cursor-pointer'>
                About
            </li>

            <li className='p-5 cursor-pointer'>
                Contact
            </li>
         </ul>


        
        </div>
        </div>
    )
}




