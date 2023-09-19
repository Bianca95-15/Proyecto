import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalContextProvider from './context/GlobalContextProvider.jsx'
import FilterContextProvider from './context/FilterContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
    <FilterContextProvider> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FilterContextProvider>   
    </GlobalContextProvider>
)
