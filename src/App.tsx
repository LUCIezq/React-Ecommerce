import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Producto from "./pages/Producto"
import Contacto from "./pages/Contacto"
import Header from "./components/Header"
import { useState, useEffect } from "react"
import { Toaster } from 'sonner'


interface ApiData {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  imageUrl: string,
  quantity: number
}

export default function App() {

  const [cart, setCart] = useState<ApiData[]>(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('error al cargar el carrito', error)
      return [];
    }
  });

  const total = cart.reduce((sum, item) => { return sum + item.quantity }, 0);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart))
    } catch (err) {
      console.error('error al setear el carrito', err)
    }
  }, [cart]);


  return (
    <>
      <Toaster richColors position="bottom-center" />
      <Header total={total} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} ></Route>
        <Route path="/productos" element={<Producto cart={cart} setCart={setCart} />} ></Route>
        <Route path="/contacto" element={<Contacto />} ></Route>
      </Routes>
    </>
  )
}

