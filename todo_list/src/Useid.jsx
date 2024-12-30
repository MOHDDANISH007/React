import React, { useId } from 'react'

const UseId = () => {
  // Using useId correctly for generating unique IDs
  //   const userNameId = useId();
  //   const emailId = useId();
  //   const passwordId = useId();
  const id = useId()

  
  const clearForm = () => {
    // Corrected querySelector to query all inputs
    document.querySelectorAll('input').forEach(input => {
      input.value = '' // Clear input values
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted')
    clearForm() // Clear the form inputs after submission
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-4 mt-4 p-4 bg-gray-200'>
          <label className='text-2xl mb-2 p-4' htmlFor={id + 'userName'}>
            UserName:
          </label>
          <input
            type='text'
            id={id + 'userName'} // Corrected id attribute
            required
            placeholder='Enter your username'
          />
        </div>

        <div className='mb-4 p-4 bg-gray-200'>
          <label className='text-2xl mb-2 p-4' htmlFor={id + 'email'}>
            Email:
          </label>
          <input
            type='email'
            id={id + 'email'} // Corrected id attribute
            required
            placeholder='Enter your email'
          />
        </div>

        <div className='mb-4 p-4 bg-gray-200'>
          <label className='text-2xl mb-2 p-4' htmlFor={id + 'password'}>
            Password:
          </label>
          <input
            type='password'
            id={id + 'password'} // Corrected id attribute
            required
            placeholder='Enter your password'
          />
        </div>

        <button
          className='m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UseId
