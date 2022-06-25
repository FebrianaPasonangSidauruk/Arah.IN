import React from 'react'
import border from '../Pic/border.png';
import { Link } from 'react-router-dom';
import { useState } from "react";
import './HasilKananGB.css';
import itemsGB from '../DataHasilGB';
import axios from "axios";

const HasilKananGB = (props) => {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
    const [show, setShow] = useState(true);
  return (
    <div className='hasilKananGB'>
    <div className='hasilKanan-container'>
        <img src={border} />
            <div className='bubble-text'>
               {/* <p id="ubahKanan">Penjelasan tentang hasil sesuai pilihan yang diklik Berikut dengan rekomendasi dan contoh jurusan apabila mengikuti tes jurusan</p>  */}
                <p>{props.penjelasan}</p>
            </div>
            <div className='buttons'>
            <Link to="/tes">
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

export default HasilKananGB