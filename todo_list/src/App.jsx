import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Practice from './Practice.jsx'
import Forward from './Forward.jsx'
import UseId from './UseId.jsx'
import Propsdrilling from './Propsdrilling.jsx'
import { BioProvider } from './Contextapi.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import { Checkbox } from '@nextui-org/checkbox'
import Button from './Button.jsx'
import {NextUIProvider} from '@nextui-org/react'
import ReducerHook from './ReducerHook.jsx'

import Memo from './Memo.jsx'

const App = () => {
  return (
    <div>
      <Todo />
      {/* <Practice /> */}
      {/* <Checkbox /> */}
      {/* <Forward /> */}
      {/* <UseId /> */}
      {/* <Propsdrilling props={"I love React"}/> */}

      {/* <BioProvider>
        <Home />
        <About />
      </BioProvider> */}
      {/* <NextUIProvider>
      <Button />  
    </NextUIProvider> */}


    {/* <ReducerHook /> */}
    {/* <Memo /> */}
    </div>
  )
}

export default App
