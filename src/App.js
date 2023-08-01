import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header'; //component
import Products from './components/Products';
import Employee from './components/Test';
//function component
function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <Products/>
      <Employee/>
    </div>
  );
}

export default App;
