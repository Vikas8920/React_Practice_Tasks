import React from 'react'
import womenBanner from './Assets/Images/banner_women.png'
import Card from './Card'
import western1 from './Assets/Images/we1.webp'
import western2 from './Assets/Images/we2.webp'
import western3 from './Assets/Images/we3.webp'
import western4 from './Assets/Images/we4.webp'
import kurta1 from './Assets/Images/ku1.webp'
import kurta2 from './Assets/Images/ku2.webp'
import kurta3 from './Assets/Images/ku3.webp'
import kurta4 from './Assets/Images/ku4.webp'
import saree1 from './Assets/Images/sa1.webp'
import saree2 from './Assets/Images/sa2.webp'
import lahenga1 from './Assets/Images/l1.webp' 
import lahenga2 from './Assets/Images/l2.webp' 

const Women = () => {
   document.title='ShopC-Women'
  return (
    <>
      {/* Western Wear */}
      <img src={womenBanner} style={{width:'100%', height:'200px'}} alt="" />
       <div className="container">
          <h1 className='text-center mt-4 bg-info rounded-pill p-2'>CATEGORIES</h1>
          <h4 className='mt-3'>Western Wear:</h4>
         <div className="row">
            <div className="col-md-3">
               <Card imgSrc={western1} title='Womens Western Midi Dress' price='$350'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={western2} title='Jashudi Womens Western Tops' price='$200'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={western3} title='Womens Western Dress A-Line Midi Dress' price='$250'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={western4} title='Ladies Western Wear Midi Dress' price='$320'/>
            </div>
         </div>
         {/* Kurtis & Kurtas */}
         <h4 className='mt-3'>Kurtis & Kurtas:</h4>
         <div className="row">
            <div className="col-md-3">
               <Card imgSrc={kurta1} title='Georgette Anarkali Kurta With duppatta' price='$230'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={kurta2} title='Womens Black Printed Stylish Kurti' price='$240'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={kurta3} title='Chanderi Silk Anarkali Kurta & Dupatta' price='$250'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={kurta4} title='Janasya Womens Mauve Cotton Kurta' price='$260'/>
            </div>
         </div>
          {/* Sarees & Lahengas */}
          <h4 className='mt-3'>Sarees & Lahengas:</h4>
         <div className="row">
            <div className="col-md-3">
               <Card imgSrc={saree1} title='Embellished Saree with Border For Women' price='$400'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={lahenga1} title='Embroidered Flared Lehenga Choli' price='$350'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={saree2} title='Tikhi Imli Gunmetal-Toned Striped Saree' price='$450'/>
            </div>
            <div className="col-md-3">
               <Card imgSrc={lahenga2} title='Embroidered Silk Lehenga Choli' price='$560'/>
            </div>
         </div>
        <div className="conatiner mt-4 text-center">
           <button className='btn btn-dark rounded-pill p-2 px-3'>Explore more</button>
        </div>
       </div>

    </>
  )
}

export default Women
