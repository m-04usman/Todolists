import React, { useState } from 'react'
import { IoIosLogOut } from 'react-icons/io'
import { MdOutlineDashboardCustomize } from 'react-icons/md'

const Layout = () => {
    const[clicked,setClicked]= useState(false)


    const onClickHandler=()=>{
     setClicked(true)
    }
  return (
    <div  className=' w-full items-center bg-[blue] justify-center flex flex-row h-screen gap- p-3'>
      <div className=' w-[25%] bg-yellow-400 h-full'>
      <aside className="w-full bg-green-100 p-4 min-h-full justify-between flex flex-col ">
        <div className=" mt-4 ">
          <h1 className="text-xl font-bold">Surveyor</h1>
        </div>
        <nav className="space-y-2">
          <div className=' flex items-center' onClick={onClickHandler}>
         
            <div onClick={onClickHandler} href="/" className={`cursor-pointer flex items-center w-full gap-1 p-2 ${clicked?"bg-[#C9FFFB] rounded-[20px]  w-full":"rounded hover:bg-green-200"} text-green-700`}>
            <MdOutlineDashboardCustomize className='h-[20px] w-[25px]' />
            Dashboard</div></div>
            <div className=' flex items-center' onClick={onClickHandler}>
         
         <div onClick={onClickHandler} href="/" className={`cursor-pointer flex items-center w-full gap-1 p-2 ${clicked?"bg-[#C9FFFB] rounded-[20px]  w-full":"rounded hover:bg-green-200"} text-green-700`}>
         <MdOutlineDashboardCustomize className='h-[20px] w-[25px]' />
         Surveys</div></div>
         <div className=' flex items-center' onClick={onClickHandler}>
         
         <div onClick={onClickHandler} href="/" className={`cursor-pointer flex items-center w-full gap-1 p-2 ${clicked?"bg-[#C9FFFB] rounded-[20px]  w-full":"rounded hover:bg-green-200"} text-green-700`}>
         <MdOutlineDashboardCustomize className='h-[20px] w-[25px]' />
         Sheets</div></div>
          
          
        </nav>
        <div className="mt-auto">
        <div className=' flex items-center' onClick={onClickHandler}>
         
         <div onClick={onClickHandler} href="/" className={`cursor-pointer flex items-center w-full gap-1 p-2 ${clicked?"bg-[#C9FFFB] rounded-[20px]  w-full":"rounded hover:bg-green-200"} text-green-700`}>
         <IoIosLogOut 
         className='h-[20px] w-[25px]' />
         Logout</div></div>
          <div className="mt-6 p-2 bg-wh rounded flex items-center">
            {/* <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" /> */}
            <div className="ml-3 ">
              <p className="text-sm">Welcome back!</p>
              <p className="font-bold">Johnathan</p>
            </div>
          </div>
        </div>
      </aside>
      </div>
      <div className='flex flex-1 bg-green-300 h-full rounded-[20px] '></div>
    </div>
  )
}

export default Layout
