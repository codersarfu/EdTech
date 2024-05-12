import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
    return(
        <div className='bg-[rgb(101,60,167)] w-full py-[100px]'>
            <div className=' max-w-[1240px] my-100px] mx-auto text-center'>
                <div className='text-xl md:text-3xl font-bold md:p-[24px]'>
                    Learn with us 
                </div>
                <div className='text-white font-bold text-3xl md:text-6xl md:p-[24px]'>Grow with us</div>
                <div className=' text-[25px] md:text-[50px] md:p-[24px] text-white font-bold'>
                    Learn
                <ReactTyped
                  className='pl-3'
                    strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']}
                      typeSpeed={100}
                      loop={true}
                      backSpeed={120}
                />
                </div>
                <button className='bg-black rounded-full border border-blue-400 text-white p-2 md:text-[15px] text-[12px]'>Get Started</button>
            </div>

        </div>
    )

}