import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UserDetails from './Components/UserDetails';
import { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(0)

  useEffect(()=>{
    fetch('https://dummyjson.com/users').then(response=>response.json()).then(data=>{setUsers(data.users)})
},[])

useEffect(() => {
    if (userId != 0)
      fetch('https://dummyjson.com/users/'+userId).then(response => response.json()).then(data =>{setUser(data)})
  },[userId])

  function changeUser(event) {
    setUserId(event.target.value)
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/users' element={
         <div className='container mt-3'>
          <div className="row">
            <div className='col-md-6'>
              <h4 className='ms-5 mt-3 ps-3 mb-4'>Select Users</h4>
                <select className='form-control form-select w-50' value={userId} onChange={changeUser}>
                  <option>Select User</option>
                  {users.map((item) => <option key={item.id} value={item.id}>{item.firstName + ' ' + item.lastName}</option>)}
                </select>
            </div>
            <div className="col-md-6">
              {<UserDetails user={user} />}
            </div>
          </div>
         </div>
        }/>
      </Routes>
    </Router>
  );
};

export default App;





