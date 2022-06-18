import React from 'react'
import './KeteranganGayaBlj.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import pembicara from '../Pic/pembicara.png';

function KeteranganGayaBlj({closeModalGayaBlj})  {
  return (
    <div className='modalGayaBljBackground'>
      <div className='modalGayaBljContainer'>
        <div className='modalTitleGayaBljCloseBtn'>
        <button onClick={() =>{
          closeModalGayaBlj(false);
        }}>
            X
        </button>
        </div>
        <div className='modalTitleGayaBlj'>
          <div className='modalBodyGayaBlj'>
            <div className='box-pembicaraJenis'>
                    <img src={pembicara} />
                </div>
                <div className='box-penjelasanJenis'>
                    <p>Menjelaskan tentang tes</p>
                </div>
          </div>
            <div className='modalFooterGayaBlj'>
            <Link to="/beranda">
            <button>Kembali ke beranda</button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default KeteranganGayaBlj