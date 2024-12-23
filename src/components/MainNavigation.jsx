import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ImgLogo from '../img/logo.png'

function MainNavigation() {


  function HandleClick() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.getElementById('menu-icon'); // Define menuIcon
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
  }
  return (
    <>
  {/*navbar*/}
  <header>
    <a href="#" className="logo">
      <img src={ImgLogo} alt="" />
    </a>
    {/*MenuIcon*/}
    <div className="bx bx-menu" id="menu-icon" onClick={HandleClick}/>
    {/*links*/}
    <ul className="navbar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/customers">Customers</NavLink>
      </li>
    </ul>
    {/*icons*/}
    <div className="header-icon">
      <Link to='cart' className="bx bx-cart-alt" />
      <i className="bx bx-search" id="search-icon" />
      <Link to='login' class='bx bx-log-in'></Link>
    </div>
    {/*Search box*/}
    <div className="search-box">
      {/* <input type="search" name="" id="" placeholder="Search Here..." /> */}
    </div>
  </header>
</>

  )
}

export default MainNavigation