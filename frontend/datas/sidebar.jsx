import {MdSpaceDashboard, MdOutlineInventory2  } from "react-icons/md";
import { BiChat } from "react-icons/bi";
import { FiTable } from "react-icons/fi";
import { FaGears } from "react-icons/fa6";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";

export const Menus = [
    {title: 'Dashboard', icon: <MdSpaceDashboard />},
    {title: 'Inbox', icon: <BiChat />, gap: true, subMenu: ['Requested Message', 'Unread Message', 'All Message'], key: 'inbox'},
    {title: 'Inventory', icon: <MdOutlineInventory2 />},
    {title: 'Sales', icon: <LiaFileInvoiceDollarSolid />},
    {title: 'Tables', icon: <FiTable />},
    {title: 'Products', icon: <AiOutlineProduct />},
    {title: 'Setting', icon: <FaGears />, subMenu: ['General', 'Security', 'Notifications'], key: 'settings'}
]