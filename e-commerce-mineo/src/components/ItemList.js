import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'

function ItemList(itemprops){
  return(
    <div className='item-list'>
      {itemprops.item.map ((item)=>(
    < Item
            name={item.title}
            image={item.image}
            price={item.price}
            id={item.id}
          />
      ))}
      </div>
  )
}

export default ItemList;