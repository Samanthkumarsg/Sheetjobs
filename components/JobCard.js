import React from 'react'

function JobCard() {
    return (
        <div className='border p-6 rounded-xl bg-white shadow-sm  hover:border-gray-400 cursor-pointer h-fit'>
            <h1 className='text-md font-semibold text-gray-900 w-auto'>Software Developer </h1>

            <div className='flex flex-row gap-4  items-center my-2'>
                <h4 className='text-sm font-normal  text-gray-500'>Abc pvt ltd</h4>
                <h4 className='text-sm font-normal  text-gray-500 border-l-2 pl-4 border-gray-300 w-auto '>Mangalore , India </h4>

            </div>
            <div className='flex justify-between items-center mb-3'>
                <h4 className='text-md font-semibold  text-emerald-500'>$12k - $20k</h4>

            </div>

            <div className='flex flex-row gap-3 mb-6 w-auto'>
                <div className='flex items-center justify-center p-1 px-3 border border-emerald-100 text-emerald-600 rounded-md text-xs bg-emerald-50 font-medium'>Full time</div>
                <div className='flex items-center justify-center p-1 px-3 border border-emerald-100 text-emerald-600  rounded-md text-xs bg-emerald-50 font-medium'>Entry level</div>
                <div className='flex items-center justify-center p-1 px-3 border border-emerald-100 text-emerald-600  rounded-md text-xs bg-emerald-50 font-medium'>Remote</div>

            </div>
            <div className='flex items-end justify-start gap-4'>
                <button className='bg-emerald-500 text-sm p-2 px-5 text-white font-normal rounded-md hover:bg-emerald-700'>Apply now </button>

            </div>
        </div>
    )
}

export default JobCard