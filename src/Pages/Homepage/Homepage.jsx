import React, {useEffect, useState} from 'react'
import './Homepage.css'
import ItemCard from '../../Components/ItemCard/ItemCard';
import CategoryBtn from '../../Components/CategoryBtn/CategoryBtn';
import axios from 'axios';

function Homepage() {
  // Show all products when page loads

  // create state to use all products.
  const[products, setProducts] = useState([]);
  // create  state to get all categories
  const[categories, setCategories] = useState([]);
  
  useEffect (
    () => {
      // grab all categories and store in state
      axios.get(`https://fakestoreapi.com/products/categories`)
      .then(res => {
        // store the api data
        setCategories(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err))

      // grab all products and store in state
      axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        // store the api data
        setProducts(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err))

    }, []

  )

  // I need the all button to show all products
  const handleAllBtn = () => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='homepage-container'>
      <div className='btns-container'>
        <button className='allBtn' onClick={handleAllBtn}>All</button>
        <div className='catBtn-container'>
        {categories.map(category => <CategoryBtn key={category} category={category} setProducts={setProducts}/>)}
        </div>
      </div>
      <div className='items-container'>
        {products.map(product => <ItemCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default Homepage