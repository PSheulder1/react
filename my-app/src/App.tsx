
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

 const [produits, setProduits]  = useState([])

 useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api2/products/')
    .then(res => setProduits(res.data))
    .catch(err=>console.error(err))
 },[])






  return (
   <div>
    <h1>Product List</h1>
    <div>
      {produits.map(p =>(
        <div>
        <span>{p.name}</span>
        <span>{p.description}</span>
        <span>{p.price}</span>
        </div>

      ))}
    </div>
   </div>
  )
}

export default App
