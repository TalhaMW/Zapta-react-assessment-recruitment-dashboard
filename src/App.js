import React from 'react'

import SideBar from './components/layout/SideBar'
import MainMenu from './components/layout/MainMenu'
import MainFooter from './components/layout/MainFooter'

import {Routes,Route} from "react-router-dom"

import  RecruitmentsPage from './pages/RecruitmentsPage'
import CreateRecruitment from './pages/CreateRecruitment'
import EditRecruitment from './pages/EditRecruitment'


const App = () => {
  return (
    <div className="app sm:flex bg-stone-100 font-bebas">
      {/*Side bar*/}
      <SideBar/>
      {/*Main Section*/}
      <main className='md:flex-[0.8] flex flex-col justify-between'>
      <MainMenu/>
      <Routes>
        <Route path='/' element={<RecruitmentsPage/>}/>
        <Route exact path='/create-recruitment' element={<CreateRecruitment/>}/>
        <Route exact path='/edit-recruitment/:id' element={<EditRecruitment/>}/>
        <Route/>
      </Routes>
      <MainFooter/>
      </main>
    </div>
  )
}

export default App