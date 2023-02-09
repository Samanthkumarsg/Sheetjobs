import Link from 'next/link';
import React from 'react'

function JobCard({ item }) {
    const { Role, Company, Location, Salary_From, Salary_To, Work_Model, Experience, Links } = item;
    return (
        <div className='border p-6 rounded-xl bg-white shadow-sm  hover:border-gray-400 cursor-pointer h-fit'>
            <h1 className='text-md font-semibold text-gray-900 w-auto'>{Role} </h1>

            <div className='flex flex-col gap-1  items-start my-2'>
                <h4 className='text-sm font-normal  text-gray-500'>{Company}</h4>
                <h4 className='text-sm font-normal  text-gray-500  border-gray-300 w-auto '>{Location} </h4>

            </div>
            <div className='flex justify-between items-center my-3'>
                <h4 className='text-md font-semibold  text-emerald-500'>{`₹ ${Salary_From} - ${Salary_To}`}</h4>

            </div>

            <div className='flex flex-row gap-3 mb-6 w-auto'>
                <div className='flex items-center justify-center p-1 px-3 border border-emerald-100 text-emerald-600 rounded-md text-xs bg-emerald-50 font-medium'>{Work_Model}</div>
                <div className='flex items-center justify-center p-1 px-3 border border-emerald-100 text-emerald-600  rounded-md text-xs bg-emerald-50 font-medium'>{Experience}</div>

            </div>
            <div className='flex items-end justify-start gap-4'>
                <Link href={`${Links}`} legacyBehavior>
                    <a target="_blank">
                        <button className='bg-emerald-500 text-sm p-2 px-5 text-white font-normal rounded-md hover:bg-emerald-700'>Apply now </button>
                    </a>
                </Link>

            </div>
        </div>
    )
}

export default JobCard