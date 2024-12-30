import React from 'react'
import { useContext } from 'react'
import BioContext from './Contextapi'
const About = () => {
    const { name, age, height, weight } = useContext(BioContext)
  return (
    <div>
      <h1>Hello World!, I am about, {name}</h1>
    </div>
  )
}

export default About
