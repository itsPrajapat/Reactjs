import './App.css';
import { Navbar } from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import React, {useState} from 'react'
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0
    }
  ]

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  // Increment Quantity Function 
  const incrementQuantity=(index)=>{
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newProductList[index].quantity++
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  // Decrement Quantity Function 
  const decrementQuantity=(index)=>{
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    if(newProductList[index].quantity > 0){
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  // Reset Data
  const resetQuantity=()=>{
    let newProductList = [...productList]
    newProductList.map((products)=>{
      products.quantity = 0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  // Remove Item
  const removeItem=(index)=>{
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index,1)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  // Add Item
  const addItem=(name, price)=>{
    let newProductList = [...productList]
    newProductList.push({
      price: price,
      name: name,
      quantity: 0
    });
    setProductList(newProductList);
  }

  return (
    <>

    <Navbar/>

    <main className='container my-5'>
      <AddItem addItem={addItem}/>
      <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
    </main>

    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
