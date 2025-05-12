import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Producto from "./pages/Producto"
import Contacto from "./pages/Contacto"
import Header from "./components/Header"

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/productos" element={<Producto />} ></Route>
        <Route path="/contacto" element={<Contacto />} ></Route>
      </Routes>
    </>
  )
}

