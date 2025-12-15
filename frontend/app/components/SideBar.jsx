import React, { useState } from 'react'
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarLeftCollapseFilled  } from "react-icons/tb";
import { Menus } from '../../datas/sidebar';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaLock, FaCheck   } from "react-icons/fa";

function SideBar({page}) {
const [open, setOpen] =useState(true);
const [subMenus, setSubMenus] = useState({
    table: false,
    analytics: false
});
const toggleSubMenu = (menu) =>{
    setSubMenus((prev) => ({
        ...prev, [menu]: !prev[menu]
    }))
}

  return (
    <>
        {/* SideBar */}
        <div className={`${open ? 'w-72 p-5' : 'w-20 p-4'} bg-zinc-900 h-screen pt-8 relative duration-300 ease-in-out`}>
            <div className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border border-zinc-50 border-2 rounded-full text-xl flex items-center justify-center ${!open && 'rotate-180'} transition-all ease-in-out duration-300`} onClick={()=> setOpen(!open)}>
                {open ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapseFilled  />}
            </div>
            <div className='flex gap-x-4 items-center justify-center'>
                {/* <img src='https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png' alt='logo' className={`w-10 h-10 rounded-full object-cover object-center cursor-pointer ease-in-out duration-3 ${open && 'rotate-[360deg]'}`} /> */}
                {/* <h1 className={`text-zinc-50 origin-left font-semibold text-xl duration-200 ease-in-out ${!open && 'scale-0'}`}></h1> */}
                <div className={`relative ${open === true ? 'w-18 h-18' : 'w-12 h-12'} flex items-center justify-center hover:cursor-pointer`}>
                          <FaCheck  className={open === true ? `absolute inset-0 w-18 h-18 text-orange-500` : `absolute inset-0 w-12 h-12 text-orange-500`}/>
                          <FaCheck  className={open === true ? `absolute inset-0 w-18 h-18 text-orange-500 scale-x-[-1]` : `absolute inset-0 w-12 h-12 text-orange-500 scale-x-[-1]`}/>
                          <FaCheck  className={open === true ? `absolute inset-0 w-18 h-18 text-orange-500 scale-x-[-1] scale-y-[-1]` : `absolute inset-0 w-12 h-12 text-orange-500 scale-x-[-1] scale-y-[-1]`}/>
                          <FaCheck  className={open === true ? `absolute inset-0 w-18 h-18 text-orange-500 scale-y-[-1]` : `absolute inset-0 w-12 h-12 text-orange-500 scale-y-[-1]`}/>
                          <h1 className={open === true ? `absolute inset-0 flex items-center justify-center w-18 h-18 text-center text-yellow-400 font-semibold text-[12px] items-center z-10 text-shadow-2xl` : `absolute inset-0 flex items-center justify-center w-12 h-12 text-center text-yellow-400 font-semibold text-[8px] items-center z-10 text-shadow-2xl`}>CHECKERS</h1>
                </div>
            </div>
            
            <ul className='pt-6 space-y-0.5'>
                {Menus.map((Menu,  index) =>(
                    <Link to={Menu.page}>
                    <li key={index} className={`flex flex-col rounded-md py-3 px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-zinc-800/50 transition-all ease-in-out duration-300 ${Menu.gap ? 'mt-6' : 'mt-2'} ${index === page && 'bg-zinc-800/40'}`}>
                        <div className='flex items-center justify-between gap-x-4' onClick={()=> toggleSubMenu(Menu.key)}>
                            <div className='flex items-center gap-2'>
                            <span className='text-lg'>
                                {Menu.icon}
                            </span>
                            <span className={`${!open && 'hidden'} origin-left ease-in-out duration-300 `}>{Menu.title}</span>
                            </div>
                            {Menu.subMenu && (
                                <span className={`ml-auto cursor-pointer text-sm ${subMenus[Menu.key] ? 'rotate-360 ' : ''} transition-transform ease-in-out duration-300 ${!open ? 'hidden' : ''}`}>
                                    {subMenus[Menu.key] ? <FaChevronDown /> : <FaChevronRight />}
                                </span>
                            )}
                        </div>

                        {Menu.subMenu && subMenus[Menu.key] && (
                            <ul className='pl-3 pt-4 text-zinc-300'>
                                {Menu.subMenu.map((subMenu, index) => (
                                    <li key={index} className='text-sm flex items-center gap-x-2 py-3 px-2 hover:bg-zinc-800 rounded-lg'>
                                        <span className='text-zinc-4'>
                                            <FaChevronRight className='text-xs' />
                                        </span>
                                        {subMenu}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    </Link>
            ))}
                </ul>
                </div>
            
    </>
  )
}

export default SideBar