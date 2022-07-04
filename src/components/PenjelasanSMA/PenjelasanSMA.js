import React from 'react'
import Navbar from '../Navbar/Navbar';
import './PenjelasanSMA.css';
import PenjelasanSMAKanan from './PenjelasanSMAKanan';
import PenjelasanSMAKiri from './PenjelasanSMAKiri';

const PenjelasanSMA = () => {
  return (
    <div className="penjelasanSMA">
        <Navbar />
        <div className="penjelasanSMA-container">
            <div className="leftSide-penjelasanSMA">
              <PenjelasanSMAKiri/>
            </div>
            <div className="rightSide-penjelasanSMA">
              <PenjelasanSMAKanan/>
            </div>
            </div>
    </div>
  )
}

export default PenjelasanSMA