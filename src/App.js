import './App.css'
import Footer from './Component/Footer';
import Home from './Component/Home';
import Men from './Component/Men';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Women from './Component/Women';
import Kids from './Component/Kids';
import Contact from './Component/Contact';
import LoginForm from './Component/LoginForm';
import Signin from './Component/Signin';
import PageNotFound from './Component/PageNotFound';

function App() {
 return(
  <>
  <Router>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route exact path='/men' element={<Men />}/>
    <Route exact path='/women' element={<Women />}/>
    <Route exact path='/kids' element={<Kids />}/>
    <Route exact path='/contact' element={<Contact />}/>
    <Route exact path='/login' element={<LoginForm />}/>
    <Route exact path='/signin' element={<Signin />}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  <Footer/>
  </Router>
  </>
 )
}

export default App;
