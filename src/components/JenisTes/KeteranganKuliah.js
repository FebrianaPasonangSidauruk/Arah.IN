import React from 'react'
import './KeteranganKuliah.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import pembicara from '../Pic/pembicara.png';

function KeteranganKuliah({closeModalKuliah}) {
  return (
    <div className='modalKuliahBackground'>
      <div className='modalKuliahContainer'>
        <div className='modalTitleKuliahCloseBtn'>
        <button onClick={() =>{
          closeModalKuliah(false);
        }}>
            X
        </button>
        </div>
        <div className='modalTitleKuliah'>
          <div className='modalBodyKuliah'>
            <div className='box-pembicaraJenis'>
                    <img src={pembicara} />
                </div>
                <div className='box-penjelasanJenis'>
                    <p>Menjelaskan tentang tes</p>
                </div>
          </div>
            <div className='modalFooterKuliah'>
            <Link to="/beranda">
            <button>Kembali ke beranda</button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default KeteranganKuliah