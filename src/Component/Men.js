import React from 'react'
import menBanner from './Assets/Images/banner_mens.png'
import Card from './Card'
import shirt1 from './Assets/Images/s1.webp'
import shirt2 from './Assets/Images/s2.webp'
import shirt3 from './Assets/Images/s3.webp'
import shirt4 from './Assets/Images/s4.webp'
import Tshirt1 from './Assets/Images/t1.webp'
import Tshirt2 from './Assets/Images/t2.webp'
import Tshirt3 from './Assets/Images/t3.webp'
import Tshirt4 from './Assets/Images/t4.webp'
import pant1 from './Assets/Images/jt1.webp'
import pant2 from './Assets/Images/jt2.webp'
import pant3 from './Assets/Images/jt3.webp'
import pant4 from './Assets/Images/jt4.webp'

const Men = () => {
   document.title='ShopC-Men'
  return (
    <>

    {/* Shirts */}
        <img src={menBanner} style={{width:'100%', height:'200px'}} alt="" />
       <div className="container">
          <h1 className='text-center mt-4 bg-info rounded-pill p-2'>CATEGORIES</h1>
          <h4 className='mt-3'>Shirts:</h4>
         <div className="row">
            <div className="col-md-3">
               <Card imgSrc={shirt1} title='The Indian Men Solid Casual White Shirt' price='$70'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={shirt2} title='Vebnor Men Solid Casual Grey Shirt' price='$80'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={shirt3} title='HIGHLANDER Men Grey Slim Fit Casual Shirt' price='$90'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={shirt4} title='Grey Regular Fit Solid Casual Sustainable Shirt' price='$50'/>
            </div>
         </div>
         {/* T-Shirts */}
         <h4 className='mt-3'>T-Shirts:</h4>
         <div className="row">
            <div className="col-md-3">
               <Card imgSrc={Tshirt1} title='Men Black Colorblocked Round Neck T-shirt' price='$30'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={Tshirt2} title='Beary Cute T-Shirts By The Souled Store' price='$40'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={Tshirt3} title='Printed Men Round Neck Beige T-shirt' price='$50'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={Tshirt4} title='Men Olive Henley Neck Pure Cotton T-shirt' price='$60'/>
            </div>
         </div>
          {/* Jeans and Trouser */}
          <h4 className='mt-3'>Jeans and Trousers:</h4>
         <div className="row">
            <div className="col-md-3">
               <Card imgSrc={pant1} title='Men Light Shade Heavy Fade Jeans' price='$130'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={pant2} title='Slim Men Black Heavy Fade Jeans' price='$140'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={pant3} title='Men Black Baggy Pocket Denim Jeans' price='$150'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={pant4} title='Veirdo Slim Men Dark Blue Jeans' price='$160'/>
            </div>
         </div>
        <div className="conatiner mt-4 text-center">
           <button className='btn btn-dark rounded-pill p-2 px-3'>Explore more</button>
        </div>
       </div>
    </>
  )
}

export default Men
