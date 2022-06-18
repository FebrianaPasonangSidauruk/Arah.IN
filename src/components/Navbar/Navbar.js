import React, {useState} from 'react'
import logoNavbar from '../Pic/logoNavbar.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import burger from '../Pic/burger.svg';

function Navbar() {

  const toggleNavbar = () => {
    setOpenLinks(!openLinks) //opposite of what currently is
  }
  const [openLinks, setOpenLinks] = useState(false) //initially state = false

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
};

  return (
    //if openLinks is == true, then id = open, else id = close
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>  
            <img src={logoNavbar} />
            <div className='hiddenLinks'>
            <Link to="/beranda"> Beranda </Link>
            <Link to="/jenistes"> Tes </Link>
            <Link to="/Tentang"> Tentang </Link>
            <Link to="/login"> Logout </Link>
            {/* <div className='logout' onClick={handleLogout}>Logout</div> */}
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/beranda"> Beranda </Link>
            <Link to="/jenistes"> Tes </Link>
            <Link to="/Tentang"> Tentang </Link>
            <Link to="/login"> Logout </Link>
            {/* <div className='logout' onClick={handleLogout}>Logout</div> */}
            <button onClick={toggleNavbar}>
              <img src={burger} />
            </button>
        </div>
    </div>
  );
}

export default Navbar