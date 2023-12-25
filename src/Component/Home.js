import React from 'react'
import carousel1 from './Assets/Images/c1.jpg'
import carousel2 from './Assets/Images/c2.avif'
import carousel3 from './Assets/Images/c3.jpg'
import Card from './Card'
import men1 from './Assets/Images/men1.webp'
import men2 from './Assets/Images/men2.webp'
import men3 from './Assets/Images/men3.webp'
import men4 from './Assets/Images/men4.webp'
import women1 from './Assets/Images/w1.webp'
import women2 from './Assets/Images/w2.webp'
import women3 from './Assets/Images/w3.webp'
import women4 from './Assets/Images/w4.webp'
import kid1 from './Assets/Images/k1.webp'
import kid2 from './Assets/Images/k2.webp'
import kid3 from './Assets/Images/k3.webp'
import kid4 from './Assets/Images/k4.webp'

const Home = () => {
  document.title='ShopC'
  return (
    <>
    {/* Carousel */}
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1}  style={{width:'100%', height:'538px'}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Welcome In the Clothing World</h3>
              <p>Summer Collection New Mordern Design</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} style={{width:'100%', height:'538px'}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Fashion! Fashion! Fashion!</h3>
              <p>Summer Collection New Mordern Design</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel3} style={{width:'100%', height:'538px'}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h3>Choose your Style to your own</h3>
              <p>Summer Collection New Mordern Design</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
     </div> 

     {/* Featured Products */}

     <div className="container mt-5">
      <h1 className='text-center bg-info text p-2 rounded-pill'>Featured Products</h1>
      <p className='text-center'>Summer Collection New Mordern Design</p>
      <div className='row'>
        <div className="col-md-3">
           <Card imgSrc={men1} title='U Turn Men Solid Casual Black Shirt' price={'$100'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={men2} title='Powerlook Full Sleeve Solid Men Jacket' price={'$120'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={men3} title='HIGHLANDER Men Blue Sweatshirt' price={'$90'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={men4} title='HIGHLANDER Men Beige Tailored Jacket' price={'$110'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={women1} title='Fancy Gown with Pretty Light Color' price={'$150'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={women2} title='Tokyo Talkies Black & Pink Floral Print...' price={'$60'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={women3} title='Tokyo Talkies V-Neck Puff Sleeves Pullover' price={'$50'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={women4} title='Tokyo Talkies V-Neck Puff Sleeves Pullover' price={'$200'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={kid1} title='Cremlin Clothing Full Sleeve...' price={'$100'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={kid2} title='Clothing Boys Casual T-shirt Pant' price={'$70'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={kid3} title='Kurta & Sharara Set with Dupatta' price={'$250'}/>
        </div>
        <div className="col-md-3">
           <Card imgSrc={kid4} title='Greyish Hues Tie & Dye Shorts for Boys' price={'$150'}/>
        </div>
      </div>
     </div>

     {/* Offers Section */}
     <div className="container mt-4 mb-5">
      <h1 className='text-center bg-info text p-2 rounded-pill'>Get Exclusive offers on different items</h1>
      <div className="row ms-5 mt-4">
        <div className="col-4">
          <h1 className='text-primary fw-bolder ms-5'>Offers!</h1>
        </div>
        <div className="col-4">
          <h1 className='text-success fw-bolder ms-5 ps-3'>Offers!</h1>
        </div>
        <div className="col-4">
          <h1 className='text-danger fw-bolder ms-5 ps-5'>Offers!</h1>
        </div>
      </div>
      <h3 className='text-center text-success'>Ready to grab the offer now!!!!!</h3>
      <h3 className='text-center text-danger'>Limited time offer</h3>
      <h3 className='text-center text-warning'>Book your favourite order soon offer valid till Tommorow !!!!!</h3>
     </div>

     
  </>
  )
}

export default Home
