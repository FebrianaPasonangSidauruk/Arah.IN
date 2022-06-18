import React from 'react'
import { useState } from "react";
import ParentJenis from './ParentJenis';
import KeteranganJenisTes from './KeteranganGayaBlj';

const Jenis = () => {
    const [keterangan, setketerangan] = useState("Penjelasan tentang keterangan jenis tes");
  function handleKeterangan(teks) {
    setketerangan(teks)
  }

  return (
    <section>
    <div className='hasil'>
        <div className='jenis'>
          <ParentJenis ubahPopUp={handleKeterangan}/>
        </div>
        <div className='popup'>
          <KeteranganJenisTes keterangan={keterangan}/>
        </div>
    </div>
  </section>
  )
}

export default Jenis