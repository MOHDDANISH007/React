import { createContext } from 'react'

// First step to create a context (and it is a object which is create by react)
const BioContext = createContext()
// console.log(BioContext)  

// Second step to make a provider component
const BioProvider = ({ children }) => {
  // it is like a warehouse where we store the data

  const name = 'Hassan'
  const age = 23
  const height = 5.9
  const weight = 60

  return (
    <BioContext.Provider value={{ name, age, height, weight }}>
      {children}
    </BioContext.Provider>
  )
}
export default BioContext
export { BioProvider }
