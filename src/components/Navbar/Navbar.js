import React, { useState } from 'react'
import logoNavbar from '../Pic/logoNavbar.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import burger from '../Pic/burger.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const history = useNavigate()
  const toggleNavbar = () => {
    setOpenLinks(!openLinks) //opposite of what currently is
  }
  const [openLinks, setOpenLinks] = useState(false) //initially state = false

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history("/")
  };

  return (
    //if openLinks is == true, then id = open, else id = close
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logoNavbar} />
        <div className='hiddenLinks'>
          <Link to="/"> Beranda </Link>
          <Link to="/PilihanTes"> Tes </Link>
          <Link to="/Tentang"> Tentang </Link>
          {/* <div className="logout" onClick={handleLogout}>
            Logout
          </div> */}
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Beranda </Link>
        <Link to="/PilihanTes"> Tes </Link>
        <Link to="/Tentang"> Tentang </Link>
        <div className="logout" onClick={handleLogout}>
          Logout
        </div>
        <button onClick={toggleNavbar}>
          <img src={burger} />
        </button>
      </div>
    </div>
  );
}

export default Navbar