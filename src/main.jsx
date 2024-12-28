import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import FavoritesProvider from './context/FavoritesContext.jsx'

import BooksProvider from './Context/BooksContext.jsx'
createRoot(document.getElementById('root')).render(

<FavoritesProvider>
   <BooksProvider>
    <App />
  </BooksProvider>
 </FavoritesProvider>

)