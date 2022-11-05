import React from 'react'
import Product from './Product'

export default function ProductList(props) {
  return (
      props.productList.length > 0 ? 
      props.productList.map((product, i)=>{
          return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} removeItem={props.removeItem}/>
      })
      : <h1>No Products exists in the cart</h1>
  )
}
