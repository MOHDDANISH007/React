import React, { useRef, useState, useEffect } from 'react'
import Counter from './Counter.jsx'

const Memo = () => {
  const Render = useRef(0) // This keeps track of how many times the component has rendered.
  const [count, setCount] = useState(0) // State for count
  const [c, setC] = useState(0)

  // Increment render count after each render
  useEffect(() => {
    Render.current++ // Increment the render count after each render
  }, [count]) // Run this effect whenever 'count' changes

  return (
    <>
      <div className='text-center mt-12'>
        <p className='text-2xl'>Count: {count}</p>
        <button
          className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setCount(count + 1)} // Increases the count
        >
          Increment
        </button>
        <button
          className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setCount(count - 1)} // Decreases the count
        >
          Decrement
        </button>

        <div>
          <span className='text-2xl'>
            This Component Rendered {Render.current} times
          </span>
        </div>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setC(c + 1)}>++</button>
        <p className='text-2xl'>Count: {c}</p>
      </div>

      <Counter c={c} /> 
    </>
  )
}

export default Memo
