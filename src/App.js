import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header'; //component
import Products from './components/Products';
import Employee from './components/Test';
import PopularProduct from './components/PopularProduct';
import TestHook from './components/Test';
//function component
function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <PopularProduct/>
    </div>
  );
}

export default App;
