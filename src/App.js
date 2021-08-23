import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import Dashboard from "./components/Dashboard/Dashboard"
import Product from "./components/Product/Product"
import Categories from "./components/Categories/Categories"
import Footer from "./components/Footer/Footer"
import Personajes from './components/Personajes/Personajes';
/* import Clase5 from "./components/Clase5/Clase5" */
/* import Clase6 from "./components/Clase6/Clase6" */
function App() {
  /*contenido de la clase 5*/
  /* let products= [
    {
      id: 1,
      name: 'camisa unicornio',
      colors: [ '#467367', '#05fd88', '#a706ee' ],
      price: 20
    },
    {
      id: 2,
      name: 'jeans',
      colors: [ '#D35EFF', '#9956E8', '#876BFF', '#5662E8', '#5E96FF' ],
      price: 32
    },
    {
      id: 3,
      name: 'taza',
      colors: [ '#804342', '#FFD2D1', '#FF8785', '#806969' ],
      price: 20
    },
    {
      id: 4,
      name: 'camisa icream',
      colors: [ '#2544B3', '#FF8A69', '#5076FF', '#7FCC2B', '#73B32E' ],
      price: 20
    },
    {
      id: 5,
      name: 'camisa dragon',
      colors: [ '#B32542', '#FF6987', '#FF4F73', '#14B32E', '#5EFF78' ],
      price: 20
    }
  ] */

  /* const frutas = ["manzana","naranja", "mandarina", "kiwi"] */
  return (
    <div  id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header/>
          <div className="container-fluid">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            <br></br>
            <Dashboard/>
            <div className="row">
              <Product/>
              <Categories/>
            </div>
            {/* Nueva sección Personajes */}
            <h3 className="h3"> Personajes de películas</h3>
            <div className="row card-container">
              {/* Aquí van las tarjetas de cada personaje */}
             
              <Personajes/>

              {/* Fin zona de tarjetas de cada personaje */}
            </div>
            {/* Fin nueva sección Personajes */}
          </div>
          <Footer/>
        </div>
      </div>
      {/*contenido de la clase 5*/}
      {/* <Clase5 frutas={frutas}/> */}
      {/* <Clase5 productos={products}/> */}
      {/* <Clase6 nombre={"frutilla"} precio={200}/>
      <Clase6 nombre={"banana"} precio={100}/>
      <Clase6 nombre={"kiwi"} precio={50}/> */}
    </div>
    
  );
}

export default App;
