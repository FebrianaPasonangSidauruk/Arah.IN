import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Tentang.css';
// import aboutPic from '../Pic/aboutPic.png';
import TentangKanan from './TentangKanan';
import TentangKiri from './TentangKiri';

const Tentang = () => {
  return (
    <div className="tentang">
        <Navbar />
        <div className="tentang-container">
            <div className="leftSide-tentang">
              <TentangKiri/>
                    {/* <img src={aboutPic} /> */}
            </div>
            <div className="rightSide-tentang">
              <TentangKanan/>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id urna eget turpis ullamcorper faucibus id nec mauris. Duis consectetur leo mi. Sed finibus massa sem, vitae euismod magna tristique vitae. Quisque luctus semper orci vitae ultricies. Sed semper elementum condimentum. Aenean sollicitudin vestibulum ex. </p> */}
            </div>
            </div>
    </div>
  )
}

export default Tentang