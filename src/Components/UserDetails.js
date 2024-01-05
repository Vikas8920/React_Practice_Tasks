
const UserDetails = ({user}) => {
  return (
    <>
        {(user != null) ?
        <div className='w-75 border ps-5 pb-5 rounded'>
          <h4 className='ms-5 pt-4 ps-5 mb-4'>User Details</h4>
          <img className="mb-2" src={user.image} width={100} />
          <p className='mb-1'><strong>Full Name:</strong> {user.firstName + ' ' + user.lastName}</p>
          <p className='mb-1'><strong>Email:</strong> {user.email}</p>
          <p className='mb-1'><strong>Tel:</strong> {user.phone}</p>
          <p className='mb-1'><strong>Gender:</strong> {user.gender.charAt(0).toUpperCase()+user.gender.slice(1)}</p>
          <p className='mb-1'><strong>Age:</strong> {user.age + ' Years old'}</p>
          <p className='mb-1'><strong>Username:</strong> {user.username.charAt(0).toUpperCase()+user.username.slice(1)}</p>
          <p className='mb-1'><strong>Password:</strong> {user.password}</p>
          <p className='mb-1'><strong>Address:</strong> {user.address.address + ', ' + user.address.city}</p>
        </div>
        :''}
    </>
  )
}

export default UserDetails
