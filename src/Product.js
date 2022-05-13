import React from 'react'
import "./Product.css";
const product = ({id,title,image,price,rating}) => {
  return (
    <div className="product" >
        <div className="product__info">
            <p>{title}</p>
      
          <p className='product__price'>
      <small>Rs:</small>
      <strong>{price}</strong>
      </p>
      <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      
      
      
      <img src={image} alt=''/>
      <button>Add to Basket</button>
      {/* <button onClick={addToBasket}>Add to Basket</button> */}
    </div>
  );
}

export default product;
