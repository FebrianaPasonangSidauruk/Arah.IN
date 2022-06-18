import React from 'react'
import './ModalHasilKanan.css'
import { useState } from "react";
import { Link } from 'react-router-dom';

function ModalHasilKanan({closeModalKanan}) {
  // const [show, setShow] = useState(false);
  return (
    <div className='modalHasilBackground'>
      <div className='modalHasilContainer'>
        <div className='modalTitleCloseBtn'>
        <button onClick={() =>{
          closeModalKanan(false);
          // setShow(!show);
          // showModalKanan(!show)
        }}>
            X
        </button>
        {/* {!show && <ModalHasilKanan showModalKanan={setShow}/>} */}
        </div>
        <div className='modalTitle'>
          <h1>Berhasil Disimpan!</h1>
          <div className='modalBody'>
            <p>Hasil dari tes yang kamu lakukan sudah disimpan di akun kamu!</p> 
          </div>
            <div className='modalFooter'>
            <Link to="/beranda">
            <button>Kembali ke beranda</button>
            </Link>
              {/* <button onClick={() => closeModalKanan(false)} id="cancelKananBtn">Batal</button> */}
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalHasilKanan