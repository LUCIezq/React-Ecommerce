import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { FavoritosProvider } from "./contexts/favoritos/FavoritosProvider"
import { CarritoProvider } from './contexts/carrito/CarritoProvider.tsx'
import { UserProvider } from './contexts/user/UserProvider.tsx'
import { UsuariosProvider } from './contexts/users/UsuariosProvider.tsx'
import { ProductosProvider } from './contexts/productos/ProductosProvider.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductosProvider>
      <Router>
        <UserProvider>
          <CarritoProvider>
            <FavoritosProvider>
              <UsuariosProvider>
                <App />
              </UsuariosProvider>
            </FavoritosProvider>
          </CarritoProvider>
        </UserProvider>
      </Router>
    </ProductosProvider>
  </StrictMode>
)
