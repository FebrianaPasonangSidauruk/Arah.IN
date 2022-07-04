import React from 'react'
import './PenjelasanKuliahKiri.css'
import gbrPenjelasanKuliah from '../Pic/jurusanKuliah.png';

const PenjelasanKuliahKiri = () => {
  return (
    <div className='PenjelasanKuliahKiri'>
        <div className='PenjelasanKuliahKiri-container'>
            <div className='gbr-PenjelasanKuliah'>
            <img src={gbrPenjelasanKuliah} />
            </div>
        </div>
    </div>
  )
}

export default PenjelasanKuliahKiri