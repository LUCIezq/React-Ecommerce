import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Producto from "./pages/Producto"
import Contacto from "./pages/Contacto"
import Header from "./components/Header"
import { Toaster } from 'sonner'
import SignIn from "./pages/SignIn"
import Perfil from "./pages/Perfil"
import { RutaProtegida } from "./utils/RutaProtegida"
import Checkout from "./pages/Checkout"
import SignUp from "./pages/SignUp"


export default function App() {
  return (
    <>
      <Toaster richColors theme="dark" position="top-center" gap={5} offset={30} />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/productos" element={<Producto />} ></Route>
        <Route path="/contacto" element={<Contacto />} ></Route>
        <Route path="/sign-in" element={<SignIn />} ></Route>
        <Route path="/sign-up" element={<SignUp />} ></Route>


        <Route path="/perfil" element={
          <RutaProtegida>
            <Perfil />
          </RutaProtegida>
        }>
        </Route>

        <Route path="/checkout" element={
          <RutaProtegida>
            <Checkout />
          </RutaProtegida>
        }>
        </Route>

      </Routes>

    </>
  )
}

