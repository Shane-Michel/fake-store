import React from 'react'
import './CategoryBtn.css'
import axios from 'axios';


function CategoryBtn({category, setProducts}) {
    // I need the category buttons to appear when the catagory data is grabbed.
    
    const handleCategoryButton = () =>{

      //make api call to get the categories
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(res =>{
          console.log(res.data)
          //I have the data, what do I do with it?
          //I want to change the items cards to the category items on click.
          setProducts(res.data)
      })
      .catch(err => {
          console.log(err)
      })

  }

  return (
    <div className='catBtn-container'>
        <button className='catBtn' onClick={handleCategoryButton}>{category[0].toUpperCase() + category.slice(1)}</button>
    </div>
  )
}

export default CategoryBtn