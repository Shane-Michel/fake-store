import React, {useEffect, useState} from 'react'
import './Homepage.css'
import ItemCard from '../../Components/ItemCard/ItemCard';
import CategoryBtn from '../../Components/CategoryBtn/CategoryBtn';
import axios from 'axios';

function Homepage() {

  // Show all items when page loads.

  // create state to use all items.
  const[items, setItems] = useState([]);
  useEffect (
    () => {
      axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err))
    }, [] 
  )

  return (
    <div className='homepage-container'>
      <div className='btns-container'>
        <button className='allBtn'>All</button>
        <CategoryBtn />
      </div>
      <ItemCard />
    </div>
  )
}

export default Homepage