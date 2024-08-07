import React, { useState } from 'react';

const Dashboard = () => {
   const[clicked,setClicked]= useState(false)


   const onClickHandler=()=>{
    setClicked(true)
   }
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-green-100 p-4 h-[1080px]">
        <div className=" mt-4 ">
          <h1 className="text-xl font-bold">Surveyor</h1>
        </div>
        <nav className="space-y-2">
          <button onClick={onClickHandler} href="/" className={`block p-2 ${clicked?"bg-[#C9FFFB] rounded-[20px] p-2":"rounded hover:bg-green-200"} text-green-700`}>Dashboard</button>
          <a href="/" className="block p-2 rounded hover:bg-green-200">Surveys</a>
          <a href="/" className="block p-2 rounded hover:bg-green-200">Sheet</a>
        </nav>
        <div className="mt-auto">
          <button className="w-full p-2 bg-red-500 text-white rounded">Logout</button>
          <div className="mt-6 p-2 bg-wh rounded flex items-center">
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
            <div className="ml-3 mt-[600px]">
              <p className="font-bold">Johnathan</p>
              <p className="text-sm">Welcome back!</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/2">
            <input type="text" placeholder="Search" className="w-[55vw] py-[9px] px-3  rounded-[57px] bg-white shadow" />
          </div>
          <button className="p-2 bg-[#008177] text-white rounded-[57px]">+ Add New User</button>
        </div>
        
        {/* Table */}
        <div className="bg-[#008177] p-1 rounded-t-xl shadow">
          <table className="w-full">
            <thead>
              <tr className="bg-[#008177] text-white">
                <th className="p-2">Username</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Availability</th>
                <th className="p-2">Role</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Rows */}
              {/* Add your table rows here */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
