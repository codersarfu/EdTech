import React from 'react'
import web_devlop from "../assests/img/web_devlop.jpg";
import Digi_marketing from "../assests/img/Digi_marketing.jpg";
import App_development from "../assests/img/App_development.png";


export default function Plans() {
    return (
        <div className='py-[50px] pl-3 px-2'>
            <div className='max-w-[1240px] max-auto md:grid grid-cols-3 gap-12'>
                <div className='shadow-xl h-[420px] my-4 bg-gray-100 hover:scale-105 duration-500'>
                <img src={web_devlop} alt=" " className='sm:p-[20S%] p-[5%] rounded md:w-[80%] md:pl-[90px] md:mt-6'/>
                <h1 className='text-center text-2xl text-bold'>Web development</h1>
                <h2 className='p-6 text-justify'>Join EdTech's Web development course to design the front-end and the back-end of websites. 
                From scratch and you'll get awesome online experiences of Learning.</h2>
                <div className='text-center mt-[-5%]'>
                <button className='bg-[#33ff9288] rounded-full border border-black text-white p-1  md:text-[15px] text-[12px] '>Get Started</button>
                </div>
                </div>
                <div className='shadow-xl h-[420px] my-4 bg-gray-100 hover:scale-105 duration-500'>
                <img src={Digi_marketing} alt=" " className='sm:p-[20S%] p-[5%] rounded md:w-[80%] md:pl-[90px] md:mt-6'/>
                <h1 className='text-center text-2xl text-bold'>Digital Marketing</h1>
                <h2 className='p-3 text-justify'> Jion this Digital Marketing program which is unique and engaging, 
                            as incorporating workshops, group exercises, case studies, and live demonstrations.</h2>
                <div className='text-center mt-[-2%]'>
                <button className='bg-[#33ff9288] rounded-full border border-black text-white p-1  md:text-[15px] text-[12px] '>Get Started</button>
                </div>
                </div>
                <div className='shadow-xl h-[420px] my-4 bg-gray-100 hover:scale-105 duration-500'>
                <img src={App_development} alt=" " className='sm:p-[20S%] p-[5%] rounded md:w-[80%] md:pl-[90px] md:mt-6'/>
                <h1 className='text-center text-2xl text-bold'>App development</h1>
                <h2 className='p-3 text-justify'> Build complete apps from scratch! Learn both front-end (how it looks) and back-end (how it works) development with EdTech App development course.
                 You'll make user-friendly apps that connect to databases and servers.</h2>
                <div className='text-center mt-[-3%]'>
                <button className='bg-[#33ff9288] rounded-full border border-black text-white p-1  md:text-[15px] text-[12px] '>Get Started</button>
                </div>
                </div>
            </div>
        </div>
    )
}  