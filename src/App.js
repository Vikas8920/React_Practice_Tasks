import './App.css'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';

function App() {
 return(
  <>
  <Router>
    <Navbar/>
    <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/users' element={<Product/>}/>
        <Route path='/users/:id' element={<ProductDetails/>}/>
    </Routes>
  </Router>
  </>
 )
}

export default App;
