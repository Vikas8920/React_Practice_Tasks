import React from 'react'
import Card from './Card'
import kidsBanner from './Assets/Images/banner_kids.png'
import boy1 from './Assets/Images/b1.webp'
import boy2 from './Assets/Images/bo2.webp'
import boy3 from './Assets/Images/bo3.webp'
import boy4 from './Assets/Images/bo4.webp'
import girl1 from './Assets/Images/g1.webp'
import girl2 from './Assets/Images/g2.webp'
import girl3 from './Assets/Images/g3.webp'
import girl4 from './Assets/Images/g4.webp'
import baby1 from './Assets/Images/sb1.webp'
import baby2 from './Assets/Images/sb2.webp'
import baby3 from './Assets/Images/sb3.webp'
import baby4 from './Assets/Images/sb4.webp'

const Kids = () => {
   document.title='ShopC-kids'
  return (
    <>
      {/* Boys */}
      <img src={kidsBanner} style={{width:'100%', height:'200px'}} alt="" />
       <div className="container">
          <h1 className='text-center mt-4 bg-info rounded-pill p-2'>CATEGORIES</h1>
          <h4 className='mt-3'>Boys Clothes:</h4>
         <div className="row">
            <div className="col-md-3">
               <Card imgSrc={boy1} title='NATU NATU SONG DRESS FOR BOYS' price='$150'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={boy2} title='baby winter clothes with stylish look' price='$200'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={boy3} title='Ethnic Wear RRR model Boys Dress set' price='$250'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={boy4} title='South Indian Mundu Dhoti Shirt' price='$320'/>
            </div>
         </div>
         {/* Girls */}
         <h4 className='mt-3'>Girls Clothes:</h4>
         <div className="row">
            <div className="col-md-3">
               <Card imgSrc={girl1} title='Bhama Girls Layered Net Gown' price='$130'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={girl2} title='Latest Peach Color Party Wear Kids Gown' price='$140'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={girl3} title='Girls Lace-Up Fit & Flare Dress' price='$150'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={girl4} title='Girls Sequins Fit & Flared Dress' price='$160'/>
            </div>
         </div>
          {/* Babies */}
          <h4 className='mt-3'>New Born Babies Dress:</h4>
         <div className="row">
            <div className="col-md-3">
               <Card imgSrc={baby1} title='Baby Boys & Baby Girls Casual T-shirt Pant' price='$200'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={baby2} title='Kids/New Born Baby Winterwear Dress' price='$150'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={baby3} title='Long Sleeve Lace and Bow Design Dress' price='$250'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={baby4} title='Adorably Funny Baby Romper Mop Red Dress' price='$260'/>
            </div>
         </div>
        <div className="conatiner mt-4 text-center">
           <button className='btn btn-dark rounded-pill p-2 px-3'>Explore more</button>
        </div>
       </div>
    </>
  )
}

export default Kids
