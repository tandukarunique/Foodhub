import React from 'react'
import './Navbar.css'
import logo from "../../assets/assests/logo.png"
import searchicon from "../../assets/assests/searchicon.jpg"
import basketicon from "../../assets/assests/basketicon.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} style={{height:"200px",width:"20%"}} alt='logo'/>
<ul className='navbar-menu'>
  <li>Home</li>
  <li>Menu</li>
  <li>Mobile App</li>
  <li>Contact us</li>
  </ul>     
  <div className='navbar-right'>
    <img src={searchicon} style={{height:"80px",width:"auto"}} alt='searchicon'/>
    <div className="narbar-search-icon">
      <img src={basketicon} style={{height:"30px",width:"auto"}} alt='basketicon'/>
      <div className='dot'></div>
      <button>Sign in</button>

    </div>
    </div> 
    </div>
  )
}

export default Navbar
