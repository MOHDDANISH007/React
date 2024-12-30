import React from 'react'
import useCustomhook from './Customhook.jsx' // Import the custom hook correctly
import { Avatar } from '@nextui-org/avatar'

const Button = () => {
  const { count, increment, decrement, reset } = useCustomhook() // Use the custom hook
  return (
    <div>
      <h1 className='text-5xl text-center'>Count: {count}</h1>
      <div className='flex space-x-4 mt-8 justify-center'>
        <div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={increment}
          >
            Increment
          </button>
        </div>

        <div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={decrement}
          >
            Decrement
          </button>{' '}
        </div>
        {/* Correct spelling of 'decrement' */}
        <div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={reset}
          >
            Reset
          </button>
        </div>

        <div className='flex gap-3 items-center'>
          <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          <Avatar name='Junior' />
          <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
          <Avatar name='Jane' />
          <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
          <Avatar name='Joe' />
        </div>
      </div>
    </div>
  )
}

export default Button
