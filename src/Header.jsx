import React from 'react'

const Header = () => {
  return (
    <div className=''>
        <div className="header absolute top-0 flex items-center justify-between h-[100px] w-full">
            <div className="logo ml-[50px] text-2xl font-extrabold text-[#f0f0f0]">
                Logo
            </div>
            <div className="menu flex mr-10">
                <div className="menu-item ml-5 text-base text-[#f0f0f0] font-extralight">About</div>
                <div className="menu-item ml-5 text-base text-[#f0f0f0] font-extralight">Journal</div>
                <div className="menu-item ml-5 text-base text-[#f0f0f0] font-extralight">Contact</div>
            </div>
        </div>
    </div>
  )
}

export default Header