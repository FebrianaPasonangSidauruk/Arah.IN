import React from 'react'
import './KeteranganBdgSma.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import pembicara from '../Pic/pembicara.png';

function KeteranganBdgSma({closeModalBdgSma}) {
  return (
    <div className='modalBdgSmaBackground'>
    <div className='modalBdgSmaContainer'>
      <div className='modalTitleBdgSmaCloseBtn'>
      <button onClick={() =>{
        closeModalBdgSma(false);
      }}>
          X
      </button>
      </div>
      <div className='modalTitleBdgSma'>
        <div className='modalBodyBdgSma'>
          <div className='box-pembicaraJenis'>
                  <img src={pembicara} />
              </div>
              <div className='box-penjelasanJenis'>
                  <p>Menjelaskan tentang tes</p>
              </div>
        </div>
          <div className='modalFooterBdgSma'>
          <Link to="/beranda">
          <button>Kembali ke beranda</button>
          </Link>
          </div>
      </div>
    </div>
  </div>
  )
}

export default KeteranganBdgSma