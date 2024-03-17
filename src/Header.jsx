import React, { useRef, useEffect } from 'react'

const Header = ({timeline, ease}) => {
    let logo = useRef(null)
    let menu_item1 = useRef(null)
    let menu_item2 = useRef(null)
    let menu_item3 = useRef(null)
    useEffect(() => {
        timeline.from(logo, 1, {
            opacity: 0,
            y: 100
        });
        timeline.from([menu_item1, menu_item2, menu_item3], 2, {
            opacity: 0,
            y: -100,
            stagger: {
                amount: .4
            },
            ease: ease
        })
    })
  return (
    <div className=''>
        <div className="header absolute top-0 flex items-center justify-between h-[100px] w-full">
            <div
                ref={el => logo = el}
                className="logo ml-[50px] text-2xl font-extrabold text-[#f0f0f0]">
                Logo
            </div>
            <div className="menu flex mr-10">
                <div ref={el => menu_item1 = el} className="menu-item ml-5 text-base text-[#f0f0f0] font-extralight">About</div>
                <div ref={el => menu_item2 = el} className="menu-item ml-5 text-base text-[#f0f0f0] font-extralight">Journal</div>
                <div ref={el => menu_item3 = el} className="menu-item ml-5 text-base text-[#f0f0f0] font-extralight">Contact</div>
            </div>
        </div>
    </div>
  )
}

export default Header