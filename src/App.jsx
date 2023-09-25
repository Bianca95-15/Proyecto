import { Link } from 'react-router-dom';
import { PageRouter } from './router/PageRouter'
import { Header } from './components';
import './pages/styles/card.css';


function App() {
  /* const { } = useFilterContext(); */

return (
    <>
        <Header/>
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