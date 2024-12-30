import React, { useRef, useState } from 'react'

const Practice = () => {
  const [count, setCount] = useState(0)
  const userName = useRef(null)
  const passWord = useRef(null)

  const clearForm = () => {
    userName.current.value = ''
    passWord.current.value = ''
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(userName.current.value, passWord.current.value)
    console.log('Form submitted')
    clearForm()
  }

  const handleFocus = () => {
    userName.current.focus() 
  }
  const handleFocusPassword = () => {
    passWord.current.focus()
  }

  return (
    <div>
      <h1 className='text-6xl font-bold underline text-red-500 text-center'>
        {count}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          ref={userName}
          required
          placeholder='Username'
          className='block w-full p-2 border border-gray-300 rounded-lg mb-4'
        />
        <input
          type='password'
          ref={passWord}
          required
          placeholder='Password'
          className='block w-full p-2 border border-gray-300 rounded-lg mb-4'
        />
        {/* Separate button for focusing */}
        <button
          type='button'
          onClick={handleFocus}
          className='block w-full p-2 bg-green-500 text-white rounded-lg mb-4'
        >
          Focus on Username
        </button>

        <button
          type='button'
          onClick={handleFocusPassword}
          className='block w-full p-2 bg-green-500 text-white rounded-lg mb-4'
        >
          Focus on Password
        </button>
        {/* Submit button */}
        <button
          type='submit'
          className='block w-full p-2 bg-blue-500 text-white rounded-lg'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Practice
