import React from 'react'
import PenjelasanKanan from './PenjelasanKanan'
import PenjelasanKiri from './PenjelasanKiri'
import { useState } from "react";
import './PenjelasanTes.css';
import Navbar from '../Navbar/Navbar';

const PenjelasanTes = () => {
    const [penjelasan, setPenjelasan] = useState("Penjelasan tentang jenis tes yang ingin dilihat");
  function handlePenjelasan(teks) {
    setPenjelasan(teks)
  }
  return (
    <section>
    <Navbar /> 
    <div className='penjelasanTes'>
        <div className='penjelasan-kiri'>
          <PenjelasanKiri ubahKanan={handlePenjelasan}/>
        </div>
        <div className='hasil-kanan'>
          <PenjelasanKanan penjelasan={penjelasan}/>
        </div>
    </div>
  </section>
  )
}

export default PenjelasanTes