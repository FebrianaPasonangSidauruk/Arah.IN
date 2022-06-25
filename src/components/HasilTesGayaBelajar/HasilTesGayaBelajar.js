import React from 'react'
import HasilKananGB from './HasilKananGB'
import HasilKiriGB from './HasilKiriGB'
import { useState } from "react";
import './HasilTesGayaBelajar.css';
import Navbar from '../Navbar/Navbar';

const HasilTesGayaBelajar = () => {
    const [penjelasan, setPenjelasan] = useState("Penjelasan tentang hasil sesuai pilihan yang diklik Berikut dengan rekomendasi dan contoh jurusan apabila mengikuti tes gaya belajar");
  function handlePenjelasan(teks) {
    setPenjelasan(teks)
  }
  return (
    <section>
    <Navbar /> 
    <div className='hasilTesGayaBelajar'>
        <div className='hasil-kiri'>
          <HasilKiriGB ubahKanan={handlePenjelasan}/>
        </div>
        <div className='hasil-kanan'>
          <HasilKananGB penjelasan={penjelasan}/>
        </div>
    </div>
  </section>
  )
}

export default HasilTesGayaBelajar