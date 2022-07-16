import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function ItemListContainer () {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState ([])
  const { catId } = useParams();
  




  useEffect (() => {
      setTimeout (() => {
      fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json ())
      .then((data) => !catId ? setInfo(data) :setInfo(data.filter((item) => item.category === catId) ))
    
      .finally(() => setLoading(false));


    }, 1000);
  }, [catId])


console.log(info)


  return loading ? (
    <h2>CARGANDO...</h2>
  ) : (
    <div>


          < ItemList item={info} />



    </div>
    
  )
}


export default ItemListContainer
