import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Producto from "./pages/Producto"
import Contacto from "./pages/Contacto"
import Header from "./components/Header"
import { useState, useEffect } from "react"
import { Toaster } from 'sonner'
import type { ApiData } from "./types/ApiData"
import { FavoritosProvider } from "./contexts/favoritos/FavoritosProvider"

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
    <FavoritosProvider>
      <Toaster richColors theme="dark" position="bottom-right" />
      <Header total={total} cart={cart} setCart={setCart} />

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} ></Route>
        <Route path="/productos" element={<Producto cart={cart} setCart={setCart} />} ></Route>
        <Route path="/contacto" element={<Contacto />} ></Route>
      </Routes>
    </FavoritosProvider>

  )
}

