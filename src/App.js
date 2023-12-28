import './App.css'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';

function App() {
 return(
  <>
  <Router>
    <Navbar/>
    <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
    </Routes>
  </Router>
  </>
 )
}

export default App;
