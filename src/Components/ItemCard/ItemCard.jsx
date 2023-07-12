import React from 'react'
import './ItemCard.css'

// // function CharacterCard({character}) {
//   return (
//     <div className='character-card'>
//         <img src={character?.image} alt="" />
//         <p>{character?.name}</p>
//         <p>{character?.status}</p>
//         <a href="#">See Details</a>
//     </div>
//   )
// }

function ItemCard() {

  return (
    <div className='items-container'>
        <div className='item-card'>
          <div className='image-container'>
          {/* <img className='item-img' src="" alt="item" /> */}
          </div>
          <div className='item-info-container'>
            <p className='item-title'>title</p>
            <p className='item-cat'>cat</p>
          </div>
          <p className='item-price'>price</p>
        </div>
    </div>
  )
}

export default ItemCard