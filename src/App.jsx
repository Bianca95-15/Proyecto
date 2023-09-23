import { useState } from 'react';
import { useGlobalContext } from './context/GlobalContextProvider';
import { useFilterContext } from './context/FilterContextProvider';
import Home from './pages/Home';
import { Link } from 'react-router-dom';
import { PageRouter } from './router/PageRouter'

function App() {
  const { searchString, handleSearchProducts } = useFilterContext();

  return (
      <>
          <input
              placeholder='Search Goods...'
              value={searchString}
              onChange={(e) => handleSearchProducts(e.target.value)}
          />
          <hr />
          <PageRouter />
      </>
  )
}


const Card = ({ categoria, nombre, precio, id, img }) => {
  return (
      <div>
          <Link to={"/detail/" + id}>
              <img src={img} alt="producto" />
              <h3>{categoria}</h3>
              <h2>{nombre}</h2>
          </Link>
          <span>${precio}</span>
      </div>
  )
}

export default App;