import { Cards } from '../../datas/dummy'

function SalesActivityCard({header}) {
  return (
    <div>
    <div className='text-center'>
        <h2 className='text-xl font-semibold text-gray-800'>{header}</h2>
        <div className='h-[3px] w-72 bg-zinc-700 mt-1 mx-auto'></div>
    </div>
    
    <div className='flex flex-row p-4 bg-zinc-200 rounded-sm items-center'>
        {Cards.map((card, index) => (
            <div className='w-50 h-full flex flex-col items-center border border-1 bg-white py-6 rounded-md m-2' key={index}>
            <h1 className='text-sm'>{card.title}:</h1>
            <h3 className='text-3xl font-semibold text-blue-500'>{card.quantity}</h3>
        </div>
        ))}
    </div>
    </div>
  )
}

export default SalesActivityCard