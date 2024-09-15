import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/catalog.jsx';
import Home from './pages/home.jsx'
import About from './pages/About.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Home></Home>

      <Catalog></Catalog>

      <About></About>

      <Footer></Footer>
    </div>
  );
}

export default App;
