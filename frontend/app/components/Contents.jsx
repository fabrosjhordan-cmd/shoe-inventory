import { Cards, ShoeDetails } from '../../datas/dummy';
import InventoryGraph from './InventoryGraph';
import { FaChevronRight, FaChevronDown, FaChevronLeft   } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaPrint } from 'react-icons/fa6';
import { BiShowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';


function Content({link}) {

  
  return (
    <div className='h-screen flex-1 bg-zinc-100 space-y-6'>
        {/* Dashboard Layout */}
        <div className='w-full h-[6ch] px-12 bg-zinc-50 shadow-md flex items-center justify-between'>
            <div>
                 
            </div>
            <div className='flex items-center gap-x-8'>
                <img src='https://imgs.search.brave.com/ytXuWG7shMoCAkjCE0MeaX60qQNElcAIfPi4Pp1TGrU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rcG9w/cGluZy5jb20vZG9j/dW1lbnRzLzVjLzAv/Mjc1LzI0MDUxMC10/cmlwbGVTLUluc3Rh/Z3JhbS1Ud2l0dGVy/LVVwZGF0ZS1ZZW9u/amktZG9jdW1lbnRz/LTEud2VicD92PTkx/N2Vi' alt='profile' className='w-10 h-10 rounded-full object-cover object-center cursor-pointer' />
            </div>
        </div>

      {/* Admin Dashboard */}
        {link === '/' && <div>
          {/* Contents  */}
        <div className='w-full px-12'>
            <h1 className='text-3xl text-zinc-800 my-4'>
            Inventory Management Dashboard
            </h1>
        </div>

        {/* Sales Activity */}
        <div className='px-12'>
          <div className='w-full items-center gap-3'>
            <div>
              <div className='text-center'>
                      <h2 className='text-xl font-semibold text-gray-800'>Sales Activity</h2>
                      <div className='h-[3px] w-72 bg-zinc-700 mt-1 mx-auto'></div>
              </div>
              <div className='flex flex-row p-4 bg-zinc-200 rounded-sm justify-center items-center'>
                  {Cards.map((card, index) => (
                  <div className='w-50 h-full flex flex-col items-center border border-1 bg-white py-6 rounded-md m-2' key={index}>
                      <h1 className='text-sm'>{card.title}:</h1>
                      <h3 className='text-3xl font-semibold text-blue-500'>{card.quantity}</h3>
                  </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
       <InventoryGraph />
       </div>}


      {/* Inventory Page */}
       {link === 'inventory' && <div>
          {/* Contents  */}
        <div className='w-full px-12'>
            <h1 className='text-3xl text-zinc-800 my-4'>
              Inventory Page
            </h1>
        </div>

        {/* Sales Activity */}
        <div className='px-12'>
          <div className='place-items-end'>
            {/* <span className='mr-2'></span> */}
          <button className='flex flex-row items-center justify-center border-1 border-zinc-200 shadow-sm px-3 py-1 gap-2 bg-blue-300 rounded-md'><FaPrint /><span>Print</span></button>
          </div>
          <table className='w-full table-fixed'>
            <thead>
            <tr className='p-2 border-b-2 border-zinc-500'>
              <th className='text-left'>Name</th>
              <th className='text-left'>Brand</th>
              <th className='text-left'>Size</th>
              <th className='text-left'>Stock</th>
            </tr>
            </thead>
            <tbody className='flex-wrap'>
              {ShoeDetails.map((items, index)=>(
              <tr className='py-6 border-b-1 border-zinc-400' key={index}>
                <td className='py-4 break-words'>{items.name}</td>
                <td className='py-4'>{items.brand}</td>
                <td className='py-4'>{items.size}</td>
                <td className='py-4'>{items.stock}</td>
              </tr>
              ))}
              <td></td>
            </tbody>
          </table>
        </div>
       </div>}

       {/* Sales Page */}
       {link === 'sales' && <div>
          {/* Contents  */}
        <div className='w-full px-12'>
            <h1 className='text-3xl text-zinc-800 my-4'>
              Sales Page
            </h1>
        </div>

        {/* Sales Activity */}
        <div className='px-12'>
          <div className='place-items-end'>
            {/* <span className='mr-2'></span> */}
          <button className='flex flex-row items-center justify-center border-1 border-zinc-200 shadow-sm px-3 py-1 gap-2 bg-blue-300 rounded-md'><FaPrint /><span>Print</span></button>
          </div>
          <table className='w-full table-fixed'>
            <thead>
            <tr className='p-2 border-b-2 border-zinc-500'>
              <th className='text-left'>Name</th>
              <th className='text-left'>Brand</th>
              <th className='text-left'>Size</th>
              <th className='text-left'>Sale ID</th>
              <th className='text-left'>Invoice</th>
            </tr>
            </thead>
            <tbody className='flex-wrap'>
              {ShoeDetails.map((items, index)=>(
              <tr className='py-6 border-b-1 border-zinc-400' key={index}>
                <td className='py-4 break-words'>{items.name}</td>
                <td className='py-4'>{items.brand}</td>
                <td className='py-4'>{items.size}</td>
                <td className='py-4'>{items.saleId}</td>
                <td className='py-4'><button className='flex flex-row items-center justify-center border-1 border-zinc-400 shadow-sm px-3 py-1 gap-2 bg-zinc-300 rounded-sm hover:cursor-pointer hover:scale-105'><BiShowAlt /><span>Show</span></button></td>
              </tr>
              ))}
              <td></td>
            </tbody>
          </table>
        </div>
       </div>}
       

        {/* Products */}
        {link === 'products' && <div>

        {/* Contents  */}
        <div className='w-full px-12'>
            <h1 className='text-3xl text-zinc-800 my-4'>
              Products Page
            </h1>
        </div>
    
        {/* Products Image */}
        <div className='px-12'>
          <div className='flex bg-white p-2 shadow-md rounded-lg object-right gap-2'>
            <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
              Brand
              <FaChevronDown aria-hidden="true" className="-mr-1 size-3 text-gray-400" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Account settings
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
            </Menu>

            <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
              Size
              <FaChevronDown aria-hidden="true" className="-mr-1 size-3 text-gray-400" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Account settings
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
            </Menu>
          </div>
    
          <div className='flex flex-wrap flex-1 gap-4'>
          {ShoeDetails.map((shoe, index)=>(
            <Link to={'/Products/ProductDetails'} className='my-2 mx- p-2 border border-1 border-black bg-white rounded-md hover:cursor-pointer hover:scale-105 duration-300'>
            <img src={shoe.image} alt='shoe' className='w-40 h-40 object-contain my-2 rounded-sm'  />
            <h1 className='w-40 my-2 text-xl font-semibold'>{shoe.name}</h1>
            {/* <h3>Brand: {shoe.brand}</h3> */}
            <h3>Size: {shoe.size}</h3>
            <h3 className='text-blue-600'>Price: {shoe.price}</h3>
            </Link>
          ))}
          
          
        </div>
          {/* Products Pagination */}
          <div className="flex items-center justify-betweens shadow-md border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 "
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav
                aria-label="Pagination"
                className="isolate inline-flex -space-x-px rounded-md shadow-xs"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <FaChevronLeft  aria-hidden="true" className="size-3" />
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:focus-visible:outline-indigo-500", Default: "text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 dark:text-gray-200 dark:inset-ring-gray-700 dark:hover:bg-white/5" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 inset-ring inset-ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <FaChevronRight  aria-hidden="true" className="size-3" />
                </a>
              </nav>
            </div>
          </div>
        </div>
        </div>
       </div>}

       {/* Product Details */}
       {link === 'productDetails' && <div>

        {/* Contents */}
        <div className='w-full px-12'>
            <h1 className='text-3xl text-zinc-800 my-4'>
              Product Details Page
            </h1>
        </div>

        <div className='w-full flex flex-wrap flex-1 gap-8 px-12'>
          {/* Left Side Part */}
        <div className='w-[45%]'>
         <img src={'https://imgs.search.brave.com/UI1-HvL5tCMmna5yYbfdOfnw2iaNDTsaRvcfVv31GfI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmlrZS5jb20v/YS9pbWFnZXMvdF93/ZWJfcHdfNTkyX3Yy/L2ZfYXV0by91XzEy/NmFiMzU2LTQ0ZDgt/NGEwNi04OWI0LWZj/ZGNjOGRmMDI0NSxj/X3NjYWxlLGZsX3Jl/bGF0aXZlLHdfMS4w/LGhfMS4wLGZsX2xh/eWVyX2FwcGx5LzRk/ZTU4M2FhLTAyOGIt/NGRkNS1iMTg5LTQ5/MThjNmU0YjBkMy9K/T1JEQU4rNitSSU5H/Uy5wbmc'} alt='shoe' className='w-120 h-90 my-2 rounded-lg'/>
         
         </div>

          {/* Right Side Part */}
         <div className='w-[50%] flex-wrap'>
         <h1 className='text-3xl font-semibold my-2'>Jordan 6 Rings</h1>
         <h3 className='text-xl my-2'>Size: 44</h3>
         <h3 className='text-xl my-2'>Price: 6244.00 Php</h3>
         <h3 className='text-xl my-2'>Brand: Jordan</h3>
         <h3 className='text-md text-zinc-700 my-3'>Current Stock: 20</h3>
         <button className='w-full border-1 border-zinc-400 shadow-sm rounded-xl bg-blue-700 py-2 my-2 text-xl text-white hover:scale-105 hover:bg-blue-700/90 ease-in-out transition-all duration-200'>Create Purchase Invoice</button>
         </div>
        </div>

        </div>}


    </div>
  )
}

export default Content