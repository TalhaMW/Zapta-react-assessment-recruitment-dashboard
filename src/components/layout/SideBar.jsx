import React from 'react'

import {CubeTransparentIcon} from "@heroicons/react/outline"
import {ArchiveIcon} from "@heroicons/react/solid"
import {PlusCircleIcon} from "@heroicons/react/solid"

import {ReactComponent as Recruitment} from "../../svg/recruitment.svg"

import {Link} from "react-router-dom"

const SideBar = () => {
  return (
    <div className='hidden  bg-slate-900 h-screen flex-[0.2] py-8 px-2 md:flex flex-col justify-between sticky top-0'>
    <div className=''>
        <header className=' flex justify-center text-white'>
        <div className='flex items-center'>
        <CubeTransparentIcon className='h-16 w-16 text-green-400'/>
        <div>
            <h1 className='text-3xl'><span className='font-bold'>Certi</span>Job</h1>
            <p className='text-xs font-medium'>Lorem ipsum dolor sit amet.</p>
        </div>
        </div>
        </header>
        <body className='text-white mt-8'>
        <Link to="/" className='flex items-center my-8 hover:opacity-80 transition-all duration-500 hover:-translate-y-1'>
        <ArchiveIcon className='w-6 h-6 mr-2'/>
        <h3 className='text-sm font-medium'>My Recruitments</h3>
        </Link>
        <Link to="/create-recruitment" className='flex items-center hover:opacity-80 transition-all duration-500 hover:-translate-y-1'>
        <PlusCircleIcon className='w-6 h-6 mr-2'/>
        <h3 className='text-sm font-medium'>Create Recruitment</h3>
        </Link>
        </body>
        </div>
        <footer className=' flex justify-center border-t-[2px] border-t-green-700 py-1'>
        <div>
        <Recruitment className='w-[150px] h-[150px]'/>
        <p className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet.</p>
        </div>
        </footer>
        </div>
  )
}

export default SideBar