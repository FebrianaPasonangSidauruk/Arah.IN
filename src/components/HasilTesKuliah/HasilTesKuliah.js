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

  const [kalimat, setkalimat] =useState();
  function handleKalimat(teks){
    setkalimat(teks)
  }

  const [skill, setSkill] =useState();
  function handleSkill(teks){
    setSkill(teks)
  } 

  const [percentage, setPercentage] = useState();
  function handlePercentage(teks){
    setPercentage(teks)
  }


  return (
  <section>
    <Navbar /> 
    <div className='hasil'>
        <div className='hasil-kiri'>
          <HasilKiri ubahKanan={handlePenjelasan}
                      ubahKananSkill={handleSkill}
                      ubahKananPercentage={handlePercentage}
                      ubahKananKalimat={handleKalimat}
          />
        </div>
        <div className='hasil-kanan'>
          <HasilKanan penjelasan={penjelasan}
                      skill={skill}
                      percentage={percentage}
                      kalimat={kalimat}
          />
        </div>
    </div>
  </section>

  //
    

  )
}

export default Hasil