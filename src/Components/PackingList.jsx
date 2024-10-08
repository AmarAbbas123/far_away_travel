import React from 'react'
import Item from './Item';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];


const PackingList = () => {
  return (
    <>
      <div className='list'>
      <ul>
      {initialItems.map((item)=> 
          (
          <Item data={item} key={item.id}/>
          ))}
          </ul>  
      </div>
    </>
  );
}

export default PackingList