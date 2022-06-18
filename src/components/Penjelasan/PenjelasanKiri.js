import React from 'react'
import PenjelasanPic from "../Pic/GayaBelajar.png"
import Navbar from '../Navbar/Navbar';
import './PenjelasanKiri.css'
import data from './DataPenjelasan';

const PenjelasanKiri = ({key, category, penjelasanTes, imagePenjelasan, ubahBagianKanan}) => {
  return (
    <div className='penjelasanKiri'>
        {/* <Navbar/> */}
        <div className='penjelasanKiri-container'>
            <div className='gbr-penjelasan'>
            <img src={PenjelasanPic} />
            </div>
            <button className="btn-penjelasan" onClick={() => ubahBagianKanan(penjelasanTes)}> Selanjutnya </button>
        </div>
    </div>
  )
}

export default PenjelasanKiri