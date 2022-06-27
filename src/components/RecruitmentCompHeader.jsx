import React from 'react'

import {Link} from "react-router-dom"

import { PlusCircleIcon } from '@heroicons/react/solid'

const RecruitmentCompHeader = () => {
  return (
    <header className='bg-white border-b-2 border-b-slate-900 py-3 px-4 border-l-[5px] border-l-slate-900 rounded-tl-xl rounded-tr-xl'>
        <nav className='flex justify-between items-center'>
            <ul className='flex'>
                <li className='mr-4 font-medium text-md md:text-xl'>Active</li>
                <li className='mr-4 font-medium text-md md:text-xl'>Archive</li>
                <li className='font-medium text-md md:text-xl'>Draft</li>
            </ul>
            <Link to="/create-recruitment" className='bg-green-400  hidden md:block text-white px-4 py-2 font-medium rounded-sm'>Create Recruitment</Link>
            <Link to="/create-recruitment" className='md:hidden'><PlusCircleIcon className='w-6'/></Link>
        </nav>
    </header>
  )
}

export default RecruitmentCompHeader