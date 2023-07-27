import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header'; //component
//function component
function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
    </div>
  );
}

export default App;
