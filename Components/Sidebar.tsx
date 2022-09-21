import React from 'react'
import profpic from '../public/images/myphoto.jpg'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import Image from 'next/image'
import profilePic from '../public/images/myphoto.jpg'

export const Sidebar = () => {
  return (
    <div>
        <Image 
        src={profilePic} 
        alt="user avatar"
        className="mx-auto rounded-full"
        width={250}
        height={300}
        />

        <h3 className="my-4 text-3xl font-medium tracking-wider font-lobster ">
            <span>Siah Wern Cing</span>
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full '>Software Developer</p>
        <p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' 
            href=""
            download='name'>
            <GiTie className='w-6 h-6'/>  Fresh Graduate
        </a>
        </p>
        {/* //icons */}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-teal-600 md:w-full'>
            <a href="">
                <AiFillInstagram className='w-8 h-8 cursor-pointer'/>
            </a>
            <a href="">
                <AiFillGithub className='w-8 h-8 cursor-pointer'/>
            </a>
            <a href="">
                <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
            </a>
        </div>
        {/* //address */}
        <div className='py-4 my-5 bg-gray-200' style={{marginLeft:'-1rem', marginRight:'-1rem'}}> 
            <div className='flex items-center justify-center space-x-2'>
                <GoLocation/>
                <span>Kepong Baru, Malaysia</span>
            </div>
            <div className='flex items-center justify-center space-x-2'>
                <AiOutlineMail/>
                <p className='my-2'>werncing99@gmail.com</p>
            </div>
            <div className='flex items-center justify-center space-x-2'>
                <AiOutlinePhone/>
                <p className='my-2'>0129222389</p>
            </div>
            
        </div>
        {/* //Email button */}
        <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-teal-500 to-blue-500 focus:outline-none'
        onClick={()=>window.open('mailto:werncing99@gmail.com')}>
            Email ME
            </button>
        {/* <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-teal-500 to-blue-500 focus:outline-none'>
            Dark Mode
            </button> */}
    </div>
  )
}
