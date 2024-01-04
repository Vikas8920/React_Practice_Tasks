import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);


  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${userId}`).then(response=>response.json()).then(data=>{setUserDetails(data)})
  },[userId])

  return (
    <div className="container mt-3">
      {userDetails ? (
        <div className='row mt-3'>
          <h2 className='text-center mb-5'>User Details</h2>
          <div className="col-md-6 border border-1 border-black rounded-1 d-flex justify-content-center align-items-center p-4">
            <img src={userDetails.image} alt="" width={'200px'}/>
          </div>
          <div className="col-md-6 border border-1 border-black rounded-1 p-4 pt-5">
          <h5 className="card-title"><strong>Full Name:</strong> {userDetails.firstName+' '+userDetails.lastName}</h5>
          <h5 className="card-title"><strong>Email:</strong> {userDetails.email}</h5>
          <h5 className="card-title"><strong>Age:</strong> {userDetails.age}</h5>
          <h5 className="card-title"><strong>Gender:</strong> {userDetails.gender}</h5>
          <h5 className="card-title"><strong>DOB:</strong> {userDetails.birthDate}</h5>
          </div>
        </div>
      ) : (
        <div className='display-4'>Loading user details...</div>
      )}
    </div>
  );
};

export default UserDetails;
