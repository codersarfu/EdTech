import React from 'react'
import laptop from "../assests/img/laptop.jpg";
export default function Experts() {

     return (
        <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-3'>
            <div className='  col-span-1 md:w-[80%]'>
            <img src={laptop} alt=" " className='sm:p-[20S%]'/>
            </div>
            <div className=' col-span-2'>
            <h1 className='text-[#00df9a] font-bold my-2 text-2xl'>LEARN FROM EXPERTS</h1>
            <h2 className='my-2 text-justify '>
            we are providing technical courses to train people who are interested in this field, 
            our mission is to empower people with the essential skills and knowledge to succeed in the fast-changing
            digital world. Our website is a top online hub that provides a wide variety of technical courses suitable
            for both beginners and experienced experts.
            </h2>
            <button className='bg-black rounded-full border border-blue-1200 text-white p-2 md:text-[15px] text-[12px]'>Get Started</button>
            
        </div>
        </div>
     )

}