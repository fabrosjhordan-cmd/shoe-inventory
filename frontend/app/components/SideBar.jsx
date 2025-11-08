import React, { useState } from 'react'
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarLeftCollapseFilled  } from "react-icons/tb";
import { Menus } from '../../datas/sidebar';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa6';

function SideBar() {
const [open, setOpen] =useState(true);
const [subMenus, setSubMenus] = useState({
    calendar: false,
    support: false,
    table: false,
    analytics: false
});
const [page, setPage] = useState('Dashboard');
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
            <div className='flex gap-x-4 items-center'>
                <img src='https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png' alt='logo' className={`w-10 h-10 rounded-full object-cover object-center cursor-pointer ease-in-out duration-3 ${open && 'rotate-[360deg]'}`} />
                <h1 className={`text-zinc-50 origin-left font-semibold text-xl duration-200 ease-in-out ${!open && 'scale-0'}`}>Admin Dashboard</h1>
            </div>
            <ul className='pt-6 space-y-0.5'>
                {Menus.map((Menu,  index) =>(
                    <li key={index} className={`flex flex-col rounded-md py-3 px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-zinc-800/50 transition-all ease-in-out duration-300 ${Menu.gap ? 'mt-6' : 'mt-2'} ${index === 0 && 'bg-zinc-800/40'}`}>
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
            ))}
                </ul>
                </div>
            
    </>
  )
}

export default SideBar