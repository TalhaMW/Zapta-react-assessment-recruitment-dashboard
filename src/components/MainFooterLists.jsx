import React from 'react'

const MainFooterLists = ({li1,li2,li3}) => {
  return (
    <div className='px-2'>
    <h2 className='pb-3 font-medium text-slate-400'>{li1}</h2>
    <h2  className='pb-3 font-medium text-slate-400'>{li2}</h2>
    <h2  className='pb-3 font-medium text-slate-400'>{li3}</h2>
</div>
  )
}

export default MainFooterLists