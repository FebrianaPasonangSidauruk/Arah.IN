import React from "react";
import arahinlogo from '../Pic/arahinLogo.png';
import logoKanan from '../Pic/beranda.png';
import './Beranda.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


function Beranda(){
    return(
        
    <div className="home">
        <Navbar />
        <div className="home-container">
            <div className="leftSide-home">
                    <img src={arahinlogo} />
                    
                    <Link to="/PilihanTes">
                    <button className="tombol"> Ikuti Tes </button>
                    </Link>
            </div>
            <div className="rightSide-home">
                <img src={logoKanan} />
            </div>
            </div>
    </div>
    );
}

export default Beranda;
