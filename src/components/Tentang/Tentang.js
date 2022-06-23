import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Tentang.css';
import TentangKanan from './TentangKanan';
import TentangKiri from './TentangKiri';

const Tentang = () => {
  return (
    <div className="tentang">
        <Navbar />
        <div className="tentang-container">
            <div className="leftSide-tentang">
              <TentangKiri/>
            </div>
            <div className="rightSide-tentang">
              <TentangKanan/>
            </div>
            </div>
    </div>
  )
}

export default Tentang