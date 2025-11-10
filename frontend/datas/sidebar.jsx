import {MdSpaceDashboard, MdOutlineInventory2  } from "react-icons/md";
import { BiChat } from "react-icons/bi";
import { FiTable } from "react-icons/fi";
import { FaGears } from "react-icons/fa6";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";

export const Menus = [
    {title: 'Dashboard', icon: <MdSpaceDashboard />, page: '/'},
    {title: 'Inbox', icon: <BiChat />, gap: true, subMenu: ['Requested Message', 'Unread Message', 'All Message'], key: 'inbox', supage: ['/Requested', '/Unread', '/All']},
    {title: 'Inventory', icon: <MdOutlineInventory2 />, page: '/Inventory'},
    {title: 'Sales', icon: <LiaFileInvoiceDollarSolid />, page: '/Sales'},
    {title: 'Tables', icon: <FiTable />, page: '/Tables'},
    {title: 'Products', icon: <AiOutlineProduct />, page: '/Products'},
    {title: 'Setting', icon: <FaGears />, subMenu: ['General', 'Security', 'Notifications'], key: 'settings', subpage: ['/General', '/Security', '/Notifications']}
]