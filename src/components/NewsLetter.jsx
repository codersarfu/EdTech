import React, { useState } from 'react'

export default function NewsLetter() {
        return(
            <div className=' bg-[rgb(101,60,167)] p-4'>
             <div className='max-w-[1240px] md:flex mx-auto justify-between py-[50px]'>
               <div className=' m-2'>
                 <h1 className=' text-[17px] md:text-[40px] font-bold text-white'>Want to Learn Latest I.T skills</h1>
                 <span className='text-white md:text-[25px] text-[12px]'>
                    Sign Up to our NewsLetter and stay up to date.
                 </span>
               </div>
               <div className=' m-2'>
                <input type='text'  className='p-3 mr-2 my-3 rounded-xl sm:w-full text-slate-400' placeholder='Email'/>
                <button className='bg-black rounded-full text-white border border-blue-400 p-2 md:text-[15px] text-[12px]'>Notify Me</button>
                <br/>
                <p className='text-white md:text-[15px] text-[12px]'>
                    we care about the protection of your data. Read our <br/> <a href='' 
                    className='text-black'>Privacy Policy.</a>
                </p>
               </div>

             </div>
            </div>
        )

}