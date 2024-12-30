import React from 'react'
import Grandgrandchild from './Grandgrandchild'

const Grandchild = ({props}) => {
  return (
    <div className='mt-10'>
      <h1 className='text-5xl'>Grandchild</h1>
      <Grandgrandchild props={props}/>
    </div>
  )
}

export default Grandchild
