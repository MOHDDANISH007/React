import React, { useState } from 'react'

const Example = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(1)

  const handleClick = event => {
    event.preventDefault();
    // const {name}  = event.target
    // console.log(`Name: ${name}`)
    setCount(prev => prev + data) // Add 'data' value to count
    setData(1) // Reset data to 1
  }

  const handlerChange = event => {
    console.log(event) // Log the event immediately
    const { name, value } = event.target // Destructure 'name' and 'value'
    console.log(`Name: ${name}, Value: ${value}`)
    setData(Number(value)) // Update state with the input value
  }

  return (
    <div>
      <button name='count' onClick={handleClick}>Count: {count}</button>
      <div>
        <input
          onChange={handlerChange}
          type='number'
          name='data' // The 'name' attribute
          placeholder='Enter a number'
        />
      </div>
    </div>
  )
}

export default Example
