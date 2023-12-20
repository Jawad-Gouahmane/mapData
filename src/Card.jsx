import React from 'react'
import { Data } from './Data'
import fifa from './image/FIFA-.png'
export default function Card() {

 const datashow = ()=> Data.map( products=>{ 

return ( 

    <div className=''>


<div class="product-card">   
    <img src={products.img} alt="Product Image"/>
    <div class="product-details">
        <div class="product-title"><h4>{products.Name}</h4></div>
        <div class="product-description">{products.Description}</div>
        <div class="product-price">{products.Price}</div>
        <a href="#" class="buy-button">{products.Add}</a>
    </div>
</div> 

    </div> 

)

  })
 
  return (
    <div className='' >   
        <h1> products </h1>
        <div className='container'>
        {datashow()}
        </div>
    </div>
  )
}
