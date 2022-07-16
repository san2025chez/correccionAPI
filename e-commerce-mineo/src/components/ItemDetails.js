import React from 'react';
import Item from './Item';
import { useEffect, useState, useContext } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext, CartProvider } from './context/useContext';


function ItemDetails ({item}) {

  console.log("llega a detail",item);
  const [add, setAdd] = useState(false)

  const {addItem} = useContext(CartContext)

  const params = useParams() 
  const [detalles, setDetalles] = useState([])
  const onAdd = (numero) => {
    addItem(item, numero)
   }


/*   const fetchDetail = () => {
  fetch(`https://fakestoreapi.com/products/${params.productsId}`)
  .then ((response) => response.json())
  .then ((data) => {setDetalles (data)})
  .then ((data) => {console.log (data)})
  }

  useEffect(() => {
    fetchDetail()
  }, []) */

  return (
    <>
        <div>          
        <img src={item.image} width="200" />
        <p> {item.description} </p>
        <p> Precio: {item.price}</p>
        {
        add ?
        <div>Añadido!</div>
        :
        < ItemCount item={item} initial={1} addItem={onAdd}  />
        
        }
        <Link to="/cart"><button>Finalizar Compra</button></Link>
        </div>
      
    </>
  )
}
export default ItemDetails