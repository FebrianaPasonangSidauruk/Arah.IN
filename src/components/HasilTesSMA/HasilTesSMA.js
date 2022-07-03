import React from 'react'
import HasilKananSMA from './HasilKananSMA'
import HasilKiriSMA from './HasilKiriSMA'
import { useState } from "react";
import './HasilTesSMA.css';
import Navbar from '../Navbar/Navbar';

const HasilTesSMA = () => {
    const [penjelasan, setPenjelasan] = useState("Penjelasan tentang hasil sesuai pilihan yang diklik apabila mengikuti tes peminatan SMA");
  function handlePenjelasan(teks) {
    setPenjelasan(teks)
  }
  return (
    <section>
    <Navbar /> 
    <div className='hasilTesSMA'>
        <div className='hasil-kiri'>
          <HasilKiriSMA ubahKanan={handlePenjelasan}/>
        </div>
        <div className='hasil-kanan'>
          <HasilKananSMA penjelasan={penjelasan}/>
        </div>
    </div>
  </section>
  )
}

export default HasilTesSMA