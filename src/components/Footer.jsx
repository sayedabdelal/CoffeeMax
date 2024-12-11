 import React from 'react'
 
 function Footer() {
   return (
    <section className="footer">
    <div className="footer-box">
      <h2>Coffee Shop</h2>
      <p>
        Crafted with Love, Served with Passion,Thank you for choosing Wicky's
        Coffee Shop. Stay connected and savor every moment with us
      </p>
      <div className="social">
        <a href="#">
          <i className="bx bxl-facebook" />
        </a>
        <a href="#">
          <i className="bx bxl-twitter" />
        </a>
        <a href="#">
          <i className="bx bxl-instagram" />
        </a>
        <a href="#">
          <i className="bx bxl-tiktok" />
        </a>
      </div>
    </div>
    <div className="footer-box">
      <h2>Support</h2>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">Help &amp; Support</a>
      </li>
      <li>
        <a href="#">Return Policy</a>
      </li>
      <li>
        <a href="#">Terms Of Use</a>
      </li>
      <li>
        <a href="#">Products</a>
      </li>
    </div>
    <div className="footer-box">
      <h2>View Guides</h2>
      <li>
        <a href="#">Features</a>
      </li>
      <li>
        <a href="#">Carreers</a>
      </li>
      <li>
        <a href="#">Blog Posts</a>
      </li>
      <li>
        <a href="#">Our Branches</a>
      </li>
    </div>
    <div className="footer-box">
      <h2>Contacts</h2>
      <div className="contact">
        <span>
          <i className="bx bx-map" />
          No:1234,ABC Road,Galle
        </span>
        <span>
          <i className="bx bx-phone" />
          123456789
        </span>
        <span>
          <i className="bx bx-envelope" />
          wicky'scoffeeshop@gmail.com
        </span>
      </div>
    </div>
  </section>  
   )
 }
 
 export default Footer