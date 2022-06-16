import React from 'react'
import { emergency } from '../utils'

const Emergency = () => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-gray-700 uppercase bg-gray-50'>
                <tr>
                    <th scope='col' className='px-6 py-4 whitespace-nowrap font-medium'>State</th>
                    <th scope='col' className='px-6 py-4 whitespace-nowrap font-medium'>Emergency Numbers</th>
                </tr>
            </thead>
            <tbody>
                {emergency.map(({state, number}) => (
                    <tr className='bg-white border-b'>
                        <td className='px-6 py-3'>{state}</td>
                        <td className='px-6 py-3'>{number}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Emergency