import React from 'react'
import { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
  //exprt useState component
  //for passing parameter to fucntion use () =>

const Content = () => {
  const [count,setcount] = useState(99)
  // const Add = () =>{
  //   setcount((paracount) => {return paracount + 1})
  //   setcount((count) => {return count + 1})
  //   setcount((count) => {return count + 1})
  // }
  // const Sub = () => {
  //   setcount((paracount) => {return paracount - 1})
  // }
  // const [text,settext] = useState("text")
  // const change = () => {
  //   settext("text is changed")
  // }

  //to do list using higher order map function useState , HTML : ul , li tags
  
  const [items,setItems] = useState([
    {
      id:1,
      checked: true,
      item: "Practice coding"
    },
    {
      id:2,
      checked: false,
      item: " Play games"
    },
    {
      id:3,
      checked:true,
      item:" clean home"
    }
  ])
  const handleChange = (id) => {
    const checkChange = items.map((item) =>
      item.id === id ? {...item,checked:!item.checked } : item)
    setItems(checkChange)
    //localStorage.setItems("todo_list",JSON.stringify(checkChange))
    }
    const removeState = (id) =>{
      const newItems = items.filter((i) => i.id !== id)
      setItems(newItems)
      //localStorage.setItems("todo_list",JSON.stringify(newItems))
    }
  
  return (
    <main>
      <ul>
        {items.length === 0 ? <p className='warning'>the list is empty</p> : null}
        
        {items.map((i) => (
          <li className='item' key={i.id}>
            <input type="checkbox" checked={i.checked} onClick={() => handleChange(i.id)}  />      
            <label onDoubleClick={() => handleChange(i.id)} style={i.checked === true ? {textDecoration  : 'line-through'}:null }>{i.item}</label>
            <FaRegTrashAlt onClick={() => removeState(i.id)} />
              
                        </li>

        ))}
      </ul> 
      <h1>name</h1>
    </main>
  );
};


export default Content
