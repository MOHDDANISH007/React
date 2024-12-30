import React, { memo, useEffect } from 'react'
import { useRef } from 'react'

const Counter = ({c}) => {
  const renderCount = useRef(0)
  useEffect(()=>{
    renderCount.current++
  },[c])
  return (
    <>
      <div className='text-center mt-12'>
        <p className='text-2xl font-bold'>
          Nothing Change Here but I have now render
        </p>
        <span className='text-2xl'>Render Count: {renderCount.current}</span>
      </div>

              
    </>
  )
}

export default memo(Counter)
