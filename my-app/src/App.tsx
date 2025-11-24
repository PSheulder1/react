import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [produits, setProduits] = useState([])
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: ''
  })

  // GET: fetch products
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api2/products/')
      .then(res => setProduits(res.data))
      .catch(err => console.error(err))
  }, [])

  // POST: add a new product
  const addProduct = () => {
    axios.post('http://127.0.0.1:8000/api2/products/', newProduct)
      .then(res => {
        console.log("✅ Product added:", res.data)
        // refresh list after adding
        setProduits([...produits, res.data])
        // reset form
        setNewProduct({ name: '', description: '', price: '' })
      })
      .catch(err => console.error("❌ Error adding product:", err))
  }

  return (
    <div>
      <h1>Product List</h1>

      {/* Form to add product */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* Display products */}
      <div>
        {produits.map((p: any) => (
          <div key={p.id}>
            <span>{p.name}</span> - 
            <span>{p.description}</span> - 
            <span>{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
