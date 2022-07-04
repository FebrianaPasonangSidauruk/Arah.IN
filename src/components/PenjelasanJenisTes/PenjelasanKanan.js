import React from 'react'
import border from '../Pic/border.png';
import { Link } from 'react-router-dom';
import './PenjelasanKanan.css';


const PenjelasanKanan = (props) => {
  return (
    <div className='penjelasanTesKanan'>
    <div className='penjelasanKanan-container'>
        <img src={border} />
            <div className='bubble-text'>
               {/* <p id="ubahKanan">Penjelasan tentang hasil sesuai pilihan yang diklik Berikut dengan rekomendasi dan contoh jurusan apabila mengikuti tes jurusan</p>  */}
                <p>{props.penjelasan}</p>
            </div>
            <img src={border} />
    </div>
</div>
  )
}

export default PenjelasanKanan