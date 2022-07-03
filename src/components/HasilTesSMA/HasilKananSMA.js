import React from 'react'
import border from '../Pic/border.png';
import { Link } from 'react-router-dom';
import { useState } from "react";
import './HasilKananSMA.css';
import itemsSMA from '../DataHasilSMA';
import axios from "axios";

const HasilKananSMA = (props) => {
  return (
    <div className='hasilKananSMA'>
    <div className='hasilKanan-container'>
        <img src={border} />
            <div className='bubble-text'>
               {/* <p id="ubahKanan">Penjelasan tentang hasil sesuai pilihan yang diklik Berikut dengan rekomendasi dan contoh jurusan apabila mengikuti tes jurusan</p>  */}
                <p>{props.penjelasan}</p>
            </div>
            <div className='buttons'>
            <Link to="/tesSMA">
                <button className="btn" onClick={() => {
                }}
                > 
                Ulangi Tes 
                </button>
                
            </Link>
            </div>
    </div>
</div>
  )
}

export default HasilKananSMA