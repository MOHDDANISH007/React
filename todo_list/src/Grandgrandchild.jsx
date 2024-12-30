import React from 'react'

const Grandgrandchild = ({props}) => {
    console.log(props)
  return (
    <div className='mt-10'>
      <h1 className='text-5xl'>Grandgrandchild , {props}</h1>
    </div>
  )
}

export default Grandgrandchild
