// import React, { useEffect, useState } from 'react'
// import UserCard from './UserCard'

// const UserList = () => {
//     const [users, setUsers] = useState([])

//     useEffect(()=>{
//         fetch('https://dummyjson.com/users').then(response=>response.json()).then(data=>{setUsers(data.users)})
//     },[])
//   return (
//     <>
//       <div className="container mt-4">
//       <div className="row">
//         {(users.length!=0)?users.map((item)=>{
//             return <div className="col-md-3">
//                        <UserCard key={item.id} id={item.id}  image={item.image} name={item.firstName+' '+item.lastName} email={item.email} phone={item.phone} gender={item.gender} age={item.age}/>
//                    </div> 
//         }):<div className='display-1'>Data is Loading...</div>}
//         </div>
//       </div>
//     </>
//   )
// }

// export default UserList
