import React from 'react'

import MainFooterLists from '../MainFooterLists'

import {ReactComponent as Twitter} from "../../svg/twitter.svg"
import {ReactComponent as Facebook} from "../../svg/facebook.svg"
import {ReactComponent as Linkedin} from "../../svg/linkedin.svg"
import { PaperAirplaneIcon } from '@heroicons/react/solid'

const MainFooter = () => {
  return (
    <footer className=' py-8 px-4'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
        <MainFooterLists li1="Services" li2="Pricing" li3="Contact"/>
        <MainFooterLists li1="Terms Of Services" li2="Terms Of Sales" li3="Privacy Policies & Cookies"/>
        <MainFooterLists li1="For subject-matter experts" li2="Help Center" li3="Information for Candidates"/>
        <div className='px-2'>
            <div className="social-media flex items-center pb-3 font-medium text-slate-400">
                <Twitter className='w-6 mdw-8 h-6 md:h-8 mr-3'/>
                <Linkedin className='w-6 mdw-8 h-6 md:h-8 mr-3'/>
                <Facebook className='w-6 mdw-8 h-6 md:h-8'/>
            </div>
            <p  className='pb-3 text-slate-400'>Lorem consectetur adipisicing elit. Ex, adipisci.</p>
            <div  className='pb-3 font-medium text-slate-400 flex'>
              <input type="email" className='bg-slate-300 font-thin mr-2' placeholder='Enter Email'/>
              <PaperAirplaneIcon className='w-6 md:w-8 text-green-400'/>
            </div>
        </div>
        </div>
        <div className='border-t-[1px] border-t-gray-400 mt-1'>
          <p className='text-center pt-1 text-gray-800'>CertiJobs 2022 || &copy; All rights Reserved</p>
        </div>
    </footer>
  )
}

export default MainFooter