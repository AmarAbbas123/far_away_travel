import React from 'react'


const Item = ({data}) => {
  return (
    <>
       <li>
        <span style={data.packed ? {textDecoration : "line-through"} : {}}>
        {data.quantity} {data.description} 
        </span>
        <button onClick={() => onDeleteItem(data.id)}>❌</button>
      </li>
    </>
  )
}

export default Item