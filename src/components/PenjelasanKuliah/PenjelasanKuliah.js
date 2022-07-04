import React from 'react'
import Navbar from '../Navbar/Navbar';
import './PenjelasanKuliah.css';
import PenjelasanKuliahKanan from './PenjelasanKuliahKanan';
import PenjelasanKuliahKiri from './PenjelasanKuliahKiri';

const PenjelasanKuliah = () => {
  return (
    <div className="penjelasanKuliah">
        <Navbar />
        <div className="penjelasanKuliah-container">
            <div className="leftSide-penjelasanKuliah">
              <PenjelasanKuliahKiri/>
            </div>
            <div className="rightSide-penjelasanKuliah">
              <PenjelasanKuliahKanan/>
            </div>
            </div>
    </div>
  )
}

export default PenjelasanKuliah