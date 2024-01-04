import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserCard from './Components/UserCard';
import UserDetails from './Components/UserDetails';
import Navbar from './Components/Navbar'
import Home from './Components/Home'

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
       fetch('https://dummyjson.com/users').then(response=>response.json()).then(data=>{setUsers(data.users)})
  },[])

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path="/users" element={
          <div className="container mt-3">
          <h1 className="mb-4 text-center">User List</h1>
          <div className="row">
            {(users.length!=0)?users.map((user) => (
              <div key={user.id} className="col-md-4 mb-4">
                <UserCard user={user}/>
              </div>
            )):<div className='display-4'>User data is loading...</div>}
          </div>
        </div>
        }/> 
        <Route path="/users/:userId" element={<UserDetails/>}/>
      </Routes>
    </Router>
  );
};

export default App;





