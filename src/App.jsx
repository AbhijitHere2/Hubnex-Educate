import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
// import Ani from './components/Ani/Ani'
import Confet from './components/Confet/Confet'
function App() {
  const [count, setCount] = useState(0)
  
  return (

   
    <>
     <Confet/>
       {/* <Ani/> */}
     <Cards/> 
    
  
    </>
  )
}

export default App
