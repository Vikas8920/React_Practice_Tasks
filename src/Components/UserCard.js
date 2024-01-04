import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
  
  return (
    <>
    <div className="card" style={{ width: '18rem' }}>   
        <img src={user.image} alt="user" width={'270px'} height={'220px'}/>
      <div className="card-body">
        <h6 className="card-title"><strong>Full Name:</strong> {user.firstName+' '+user.lastName}</h6>
        <h6 className="card-title"><strong>Email:</strong> {user.email}</h6>
        <h6 className="card-title"><strong>Age:</strong> {user.age}</h6>
        <h6 className="card-title"><strong>Gender:</strong> {user.gender}</h6>
        <h6 className="card-title"><strong>DOB:</strong> {user.birthDate}</h6>
        <Link to={`/users/${user.id}`} className="btn btn-primary mt-2">
          Show Details
        </Link>
      </div>
    </div>
    </>
  );
};

export default UserCard;


