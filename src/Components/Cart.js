import React from 'react';

const Cart = ({ cart }) => {
  return (
    <>
    <div className='container mt-4'>
      <h2 className='text-center mb-4'>Cart Items</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>SNo.</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map(item => (
                    <tr key={item.id}>
                      <td className='ps-3 pt-2'>{item.id}</td>
                      <td className='ps-4'><img src={item.thumbnail} alt="" width={'60px'} height={'30spx'}/></td>
                      <td className='ps-4 pt-2'>{item.title}</td>
                      <td>$ {item.price}</td>
                      <td className='ps-4 pt-2'>{item.stock}</td>
                      <td className='ps-3 pt-2'>{item.rating}</td>
                    </tr>   
                ))}
                </tbody>
               
            </table>
      
    </div>
    </>
  );
};

export default Cart;
