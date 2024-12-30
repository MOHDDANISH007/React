// import React, { useContext } from 'react'
import BioContext from './Contextapi'
import {use, useContext} from "react"

const Home = () => {
  // const newHook = true;
  // let name, age, height, weight;
  // // condition render is allow in use , but is not allow in useContext
  // if(newHook == true){
  //   const { name, age, height, weight } = use(BioContext)
  // }
  const { name, age, height, weight } = useContext(BioContext)
  

  return (
    <div>
      <h1>Hello Context API</h1>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Height: {height}</h1>
      <h1>Weight: {weight}</h1>
    </div>
  )
}

export default Home
