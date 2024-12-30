import React from 'react'
import Grandchild from './Grandchild'

const Child = ({props}) => {
  return (
    <div className='mt-10'>
      <h1 className='text-5xl'>Child</h1>
      <Grandchild props={props}/>
    </div>
  )
}

export default Child
