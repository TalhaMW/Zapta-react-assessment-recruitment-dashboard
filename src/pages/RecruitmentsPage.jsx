import React,{useContext} from 'react'

import { RecruitmentContext } from '../components/context/RecruitmentContext'

import RecruitmentCompHeader from '../components/RecruitmentCompHeader'

import { Link } from 'react-router-dom'

import AllRecruitments from '../components/AllRecruitments'

const RecruitmentsPage = () => {

  const {lists} = useContext(RecruitmentContext);

  if(lists.length===0){
    return(
      <div className=' min-h-[90vh] px-8 py-12 flex justify-center items-center'>
      <div className='shadow-xl flex flex-col justify-center items-center p-1 md:p-2'>
      <h1 className='text-3xl md:text-5xl my-4 leading-10'>None of the Recruitment Created yet </h1>
      <Link to="/create-recruitment" className='bg-green-500 my-8 px-3 py-2 text-lg font-semibold text-white rounded-sm hover:opacity-80 transition-all duration-700 hover:-translate-y-2'>Create Recruitment</Link>
      </div>
      </div>
    )
  }

  return (
    <div className=' min-h-[90vh] px-8 py-12'>
    <div className='shadow-xl'>
        {/* Recruitment header */}
        <RecruitmentCompHeader/>
        {/* Main body */}
        <AllRecruitments/>
        {/* footer */}
    </div>
    </div>
  )
}
export default RecruitmentsPage