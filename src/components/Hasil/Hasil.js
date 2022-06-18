import React from 'react'
import HasilKanan from './HasilKanan'
import HasilKiri from './HasilKiri'
import { useState } from "react";
import './Hasil.css';
import Navbar from '../Navbar/Navbar';

const Hasil = () => {
  const [penjelasan, setPenjelasan] = useState("Penjelasan tentang hasil sesuai pilihan yang diklik Berikut dengan rekomendasi dan contoh jurusan apabila mengikuti tes jurusan");
  function handlePenjelasan(teks) {
    setPenjelasan(teks)
  }
  return (
  <section>
    <Navbar /> 
    <div className='hasil'>
        <div className='hasil-kiri'>
          <HasilKiri ubahKanan={handlePenjelasan}/>
        </div>
        <div className='hasil-kanan'>
          <HasilKanan penjelasan={penjelasan}/>
        </div>
    </div>
  </section>

  //
    

  )
}

export default Hasil