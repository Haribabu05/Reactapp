import React from 'react'
import { useState } from 'react'
const randomname = () =>{
    const name = ['hari','babu','siva','kumar','ryan']
    const i = Math.floor(Math.random()*5)
    return name[i]
   
  }

  //exprtin component
  //for passing parameter to fucntion use () =>
const Subheader = () => {
  const [count,setcount] = useState(99)
  const Add = () =>{
    setcount((paracount) => {return paracount + 1})
    setcount((count) => {return count + 1})
    setcount((count) => {return count + 1})
  }
  const Sub = () => {
    setcount((paracount) => {return paracount - 1})
  }
  const [text,settext] = useState("text")
  const change = () => {
    settext("text is changed")
  }
  return (
    <div className='content'>
      <p>{text}</p>
     
      <button onClick={change} >Subscribe</button>
      <p onClick={Add}>+</p>
      <span>{count}</span>
      <p onClick={Sub}>-</p>
    </div>
  )
}

export default Subheader
