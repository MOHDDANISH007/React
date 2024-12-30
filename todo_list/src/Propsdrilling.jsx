import React from 'react'
import Child from './Child'

const Propsdrilling = ({props}) => {
  return (
    <div className='text-center'>
      <h1 className='text-5xl'>Component A</h1>
      <Child props={props}/>
    </div>
  )
}

export default Propsdrilling
