//import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header'; //component
import Products from './components/Products';
import PopularProduct from './components/PopularProduct';
import {Routes, Route} from 'react-router-dom'
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';


//function component
function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <Routes>
        <Route path='/' element={<PopularProduct/>} ></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/detail/:id' element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
