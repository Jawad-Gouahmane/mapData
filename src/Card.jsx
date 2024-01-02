import React from 'react'
import { Data } from './Data'
import fifa from './image/FIFA-.png'
export default function Card( props) {

 const datashow = ()=> Data.map( products=>{ 

return ( 

    <div className=''>


<div class="product-card">   
    <img src={products.img} alt="Product Image"/>
    <div class="product-details">
        <div class="product-title"><h4>{products.Name}</h4></div>
        <div class="product-description">{products.Team}</div>
        <div class="product-price">{products.Nationality}</div>
        <div class="product-price">{products.jerseyNumber}</div>
        <div class="product-price">{products.Age}</div>
        <a href="#" class="buy-button">{products.Add}</a>
    </div>
</div> 

    </div> 

)

  })
 
  return (
    <div className='' >   
        <h1> Players  </h1>
        <div className='container'>
        {datashow()}
        </div>
    </div>
  )
}
