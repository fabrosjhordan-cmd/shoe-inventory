import { Cards } from '../../datas/dummy'
import InventoryGraph from './InventoryGraph'
import SalesActivityCard from './SalesActivityCard'

function Content() {

  
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
        
    </div>
  )
}

export default Content