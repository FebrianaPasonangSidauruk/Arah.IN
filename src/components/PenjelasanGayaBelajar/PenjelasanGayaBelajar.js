import React from 'react'
import Navbar from '../Navbar/Navbar';
import './PenjelasanGayaBelajar.css';
import PenjelasanGBKanan from './PenjelasanGBKanan';
import PenjelasanGBKiri from './PenjelasanGBKiri';

const PenjelasanGayaBelajar = () => {
  return (
    <div className="penjelasanGB">
        <Navbar />
        <div className="penjelasanGB-container">
            <div className="leftSide-penjelasanGB">
              <PenjelasanGBKiri/>
            </div>
            <div className="rightSide-penjelasanGB">
              <PenjelasanGBKanan/>
            </div>
            </div>
    </div>
  )
}

export default PenjelasanGayaBelajar