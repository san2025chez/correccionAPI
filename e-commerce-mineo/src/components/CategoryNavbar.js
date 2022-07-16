import React from 'react'
import ItemListContainer from './ItemListContainer'
import { Link, NavLink } from 'react-router-dom';
export const CategoryNavbar = () => {
        const categories = [
          { id: "todos los productos", address: '/', text: 'TODOS LOS PRODUCTOS' },
          { id: "men's clothing", address: "/category/men's clothing", text: "men's clothing" },
          { id: "women's clothing", address: "/category/women's clothing", text: "women's clothing" },
          { id: 'jewelery' , address: '/category/jewelery', text: 'jewelery' },
          { id: 'electronics', address: '/category/electronics', text: 'electronics' },
        ];
      
        return (
          <section style={{ background: 'lightgray' }}>
            {categories.map((cat) => {
              return (
                <div className="links" key={cat.id}>
                  <NavLink
                    to={cat.address}
                    className={({ isActive }) => (isActive ? 'activeClass' : '')}>
                  
                    {cat.text}
                  </NavLink>
                </div>
              );
            })}
          </section>
        );
      };