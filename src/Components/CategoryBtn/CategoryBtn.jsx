import React from 'react'
import './CategoryBtn.css'

function CategoryBtn({item}) {
    // I need the category buttons to appear when the catagory data is grabbed.
    

  return (
    <div className='catBtn-container'>
        <button className='catBtn'>{item?.category}</button>
    </div>
  )
}

export default CategoryBtn