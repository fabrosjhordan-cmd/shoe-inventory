import { Cards, ShoeDetails } from '../../datas/dummy';
import InventoryGraph from './InventoryGraph';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


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
          <div className='flex flex-wrap flex-1 gap-4'>
          {ShoeDetails.map((shoe, index)=>(
          <div className='my-2 mx- p-2 border border-1 border-black bg-white rounded-md hover:cursor-pointer hover:scale-105 duration-300'>
            <img src={shoe.image} alt='shoe' className='w-40 h-40 object-contain my-2 rounded-sm'  />
            <h1 className='my-2 text-xl font-semibold'>{shoe.name}</h1>
            <h3>Brand: {shoe.brand}</h3>
            <h3>Size: {shoe.size}</h3>
            <h3 className='text-blue-600'>Price: {shoe.price}</h3>
          </div>
          ))}
          
          
        </div>
          {/* Products Pagination */}
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
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


    </div>
  )
}

export default Content