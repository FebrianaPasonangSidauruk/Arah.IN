import React from 'react'
import './ModalBatal.css';
import { Link } from 'react-router-dom';

function ModalBatal({closeModalBatal}) {
  return (
    <div className='modalBatalBackground'>
    <div className='modalBatalContainer'>
      <div className='modalBatalCloseBtn'>
      <button onClick={() =>{
        closeModalBatal(false);
        // setShow(!show);
        // showModalKanan(!show)
      }}>
          X
      </button>
      {/* {!show && <ModalHasilKanan showModalKanan={setShow}/>} */}
      </div>
      <div className='modalTitleBatal'>
        <h1>Anda akan meninggalkan tes</h1>
        <div className='modalBodyBatal'>
          <p>Apakah Kamu Yakin meninggalkan tes?</p> 
        </div>
          <div className='modalFooterBatal'>
          <Link to="/beranda">
          <button>Yakin</button>
          </Link>
            {/* <button onClick={() => closeModalKanan(false)} id="cancelKananBtn">Batal</button> */}
            
          </div>
      </div>
    </div>
  </div>
  )
}

export default ModalBatal