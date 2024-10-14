import { useState } from 'react'
import './App.css'
import Logo from './Components/Logo'
import PackingList from './Components/PackingList'
import Form from "./Components/Form"
import Stats from "./Components/Stats"

function App() {
  const [items,setItems] = useState([])
  

  const handleAddItems=(item)=>{
    setItems((items)=>[...items,item])
  }

  const handleDeleteItem = (id) => {
    setItems((items)=>items.filter((item)=>item.id !== id))
  }

  const handleToggleItem = (id) => {
    setItems((items)=> items.map(item=>item.id === id ? {
      ...item , packed : !item.packed
    } : item))
  }

  const handleClearList = () => {
  const confirmed = window.confirm("Are you want to delete all items")

  if (confirmed) setItems([])

    
  }

  return (
    <>
     <Logo />
     <Form onAddItems={handleAddItems} /> 
     <PackingList items={items} onDeleteItem={handleDeleteItem}
      onToggleItem = {handleToggleItem}
      onClearList = {handleClearList}
      />
     <Stats items = {items} />
    </>
  )
}

export default App
