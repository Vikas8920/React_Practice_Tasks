import React from 'react'
import appStore from './Assets/Images/app store.avif'
import googleStore from './Assets/Images/google.avif'
import visa from './Assets/Images/visa.avif'
import masterCard from './Assets/Images/master.avif'
import maestro from './Assets/Images/maestro.avif'
import americanExp from './Assets/Images/american.webp'
import rupayCard from './Assets/Images/rupay.webp'
import Club from './Assets/Images/club.avif'
import wallet from './Assets/Images/wallet.webp'
import netBanking from './Assets/Images/bank.webp'
import insta from './Assets/Images/insta.avif'
import facebook from './Assets/Images/facebook.avif'
import pinterest from './Assets/Images/pin.avif'
import linkedin from './Assets/Images/linkedin.avif'
import youtube from './Assets/Images/youtube.avif'
import twitter from './Assets/Images/twitter.avif'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className="container-fluid color mt-4 bg-light ">
        <div className="container-md d-flex gap-4">
            <div className="col-md-3 p-2 mt-4">
                <h4 className="ms-3">Corporate</h4>
                <ul className="list-unstyled">
                    <li><Link to="" className="nav-link text-black">About Us</Link></li>
                    <li><Link to="" className="nav-link text-black">Corporate Governance</Link></li>
                    <li><Link to="" className="nav-link text-black">ShopC in the News</Link></li>
                    <li><Link to="" className="nav-link text-black">Careers</Link></li>
                </ul>
            </div>
            <div className="col-md-3 p-2  mt-4">
                <h4 className="ms-3">Useful Links</h4>
                <ul className="list-unstyled">
                    <li><Link to="" className="nav-link text-black">Explore Gift Cards</Link></li>
                    <li><Link to="" className="nav-link text-black">Buy in Bulk</Link></li>
                    <li><Link to="" className="nav-link text-black">Discover Our Brands</Link></li>
                    <li><Link to="" className="nav-link text-black">Checkout Our Blog</Link></li>
                    <li><Link to="" className="nav-link text-black">Find a Studio</Link></li>
                </ul>
            </div>
            <div className="col-md-3 p-2 mt-4">
                <h4 className="ms-3">Need Help ?</h4>
                <ul className="list-unstyled">
                    <li><Link to="" className="nav-link text-black">FAQ</Link></li>
                    <li><Link to="" className="nav-link text-black">Policies</Link></li>
                    <li><Link to="" className="nav-link text-black">Contact Us</Link></li>
                </ul>
            </div>
            <div className="col-md-3 p-2 mt-4">
              <h4 className="ms-3">Popular cities</h4>
                <ul className="list-unstyled">
                    <li><Link to="" className="nav-link text-black">
                        Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata,Noida, Goa, Ghaziabad, Faridabad, and many more</Link>
                    </li>
                </ul>
                <h5 className="ms-3">Download our App</h5>
                <div className="boxes d-flex">
                        <img src={appStore} width="120px" height="35px"/>
                        <img src={googleStore} width="120px" height="35px"/>
                </div>
            </div>
            </div>
                <div className="container-xl borders d-flex gap-4">
                  <div className="col-md-7 pt-5 pb-5">
                    <h5 className="mb-3">we accept</h5>
                      <div className="d-flex gap-2">
                        <img src={visa} width="70px"/>
                        <img src={masterCard} width="70px"/>
                        <img src={maestro} width="70px"/>
                        <img src={americanExp} width="70px"/>
                        <img src={rupayCard} width="70px"/>
                        <img src={Club} width="70px"/>
                        <img src={wallet} width="70px"/>
                        <img src={netBanking} width="70px"/>
                      </div>
                  </div>
                  <div className="col-md-5 pt-5 pb-5 ps-5">
                    <h5 className="mb-3">Like What You See? Follow us Here</h5>
                    <div className="d-flex gap-3">
                      <Link to=""><img src={facebook} width="50px"/></Link>
                      <Link to=""><img src={pinterest} width="50px"/></Link>
                      <Link to=""><img src={insta} width="50px"/></Link>
                      <Link to=""><img src={linkedin} width="50px"/></Link>
                      <Link to=""><img src={youtube} width="50px"/></Link>
                      <Link to=""><img src={twitter} width="50px"/></Link>                     
                    </div>
                  </div>
                </div>
                <div className="container-md  pt-4 links">
                  <div className="d-flex justify-content-center align-items-center">
                    <span><Link to="#" className="nav-link text-black">Whitehat</Link></span>
                    <span><Link to="#"  className="nav-link text-black">Sitemap</Link></span>
                    <span><Link to="#"  className="nav-link text-black">Terms Of Use</Link></span>
                    <span><Link to="#"  className="nav-link text-black">Privacy Policy</Link></span>
                    <span><Link to="#"  className="nav-link text-black">Your Data and Security</Link></span>
                    <span><Link to="#"  className="nav-link text-black">Grievance Redressal</Link></span>
                  </div>
                  <div className="d-flex justify-content-center align-items-center pb-5">
                    <span>© Copyright ShopC Private Limited</span>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Footer
