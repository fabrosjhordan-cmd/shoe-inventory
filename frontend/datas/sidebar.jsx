import {MdSpaceDashboard, MdOutlineHeadsetMic  } from "react-icons/md";
import { BiChat } from "react-icons/bi";
import { TiCalendar } from "react-icons/ti";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { FaGears } from "react-icons/fa6";

export const Menus = [
    {title: 'Dashboard', icon: <MdSpaceDashboard />},
    {title: 'Inbox', icon: <BiChat />, gap: true, subMenu: ['Requested Message', 'Unread Message', 'All Message'], key: 'inbox'},
    {title: 'Calendar', icon: <TiCalendar />},
    {title: 'Tables', icon: <FiTable />},
    {title: 'Analytics', icon: <GoGraph />},
    {title: 'Support', icon: <MdOutlineHeadsetMic />},
    {title: 'Setting', icon: <FaGears />, subMenu: ['General', 'Security', 'Notifications'], key: 'settings'}
]