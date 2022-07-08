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
    <div className='hasilTesSMA'>
        <div className='hasil-kiri'>
          <HasilKiriSMA ubahKanan={handlePenjelasan}
                        ubahKananSkill={handleSkill}
                        ubahKananPercentage={handlePercentage}
                        ubahKananKalimat={handleKalimat}
          />
        </div>
        <div className='hasil-kanan'>
          <HasilKananSMA penjelasan={penjelasan}
                          skill={skill}
                          percentage={percentage}
                          kalimat={kalimat}
          />
        </div>
    </div>
  </section>
  )
}

export default HasilTesSMA