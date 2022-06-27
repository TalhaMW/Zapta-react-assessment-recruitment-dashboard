import React, { useState,useContext, useEffect } from 'react'

import { RecruitmentContext } from '../components/context/RecruitmentContext'

import { useNavigate, useParams } from 'react-router-dom'

const EditRecruitment = () => {


 const {lists,editList} = useContext(RecruitmentContext)
 const params = useParams();
 const navigate = useNavigate()
 console.log(params);



  // console.log(lists);
  const [formData,setFormData] = useState({
    recruitmentName:"",
    noOfCandidates:"",
    status:false
  })
  const {recruitmentName,noOfCandidates} = formData 
const changeHandler = (e)=>{
  const {id,value} = e.target; 
  setFormData((prevData)=>{
    return {...prevData,[id]:value}
  })
}
const formSubmitHandler = (e)=>{
  e.preventDefault()
  editList(formData,Number(params.id))
  navigate("/")
}

  return (
    <div className='px-12 py-6'>
    <form onSubmit={formSubmitHandler} className='bg-white min-h-[70vh] px-8 py-4'>
      <div className='mb-4'>
      <input required type="text" id="recruitmentName" placeholder='Enter Name of your Recruitment' className='border-[1px] border-gray-300 w-full py-3 px-2 rounded-sm' value={recruitmentName} onChange={changeHandler}/>
      </div>
      <div className='mb-4'>
      <input required type="number" id='noOfCandidates' placeholder='No of Candidates' className='border-[1px] border-gray-300 w-full py-3 px-2 rounded-sm' value={noOfCandidates} onChange={changeHandler}/>
      </div>
      <div className='flex flex-col md:flex-row items-center mb-4'>
        <input type="text" placeholder='Job Role' className='border-[1px] border-gray-300 w-full py-3 px-3 mr-2 rounded-sm mb-2 md:mb-0'/>
        {/* <input type="text" placeholder='Select Level of Employee' className='border-[1px] border-gray-300 w-full ml-2 py-3 px-2  rounded-sm'/> */}
        <select name='Select' className='w-full border-[1px] border-gray-300 py-3 px-3 ml-0 mr-1 md:mr-0 md:ml-3'>
        <option value="">Select Level of Employee</option>
          <option value="Intership">Internship</option>
          <option value="Medium">Medium</option>
          <option value="Professional">Professionalism</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
      <div>
        <textarea id="" rows="5" className='border-[1px] border-gray-300 w-full py-3 px-3 mr-2 rounded-sm' placeholder='Write Description here'></textarea>
      </div>
      <div className='flex justify-end mt-4'>
        <button className='border-[1px] border-green-400 px-4 py-1 md:py-2 mr-2 text-xs md:text-lg text-gray-700 hover:bg-green-400 hover:text-white transition-all duration-700 rounded-sm'>Cancel</button>
        <button className=' px-4 py-1 md:py-2 bg-green-400 text-xs md:text-lg text-yellow-50 rounded-sm transition-all duration-700 hover:opacity-70' type='submit'>Save and Continue</button>
      </div>
    </form>
    </div>
  )
}

export default EditRecruitment