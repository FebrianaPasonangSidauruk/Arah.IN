import React from 'react'
import border from '../Pic/border.png';
import { Link } from 'react-router-dom';
import { useState } from "react";
import './HasilKanan.css';
import ModalHasilKanan from '../ModalHasilKanan';
import items from '../DataHasil';
import axios from "axios";

const HasilKanan = (props) => {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
    const [show, setShow] = useState(true);


    // const tekskalimat = 'Tes dulu'
    // const handleSimpan = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const url = "http://localhost:4000/api/simpanhasil";
	// 		const { data: item} = await axios.post(url, data);
	// 		// localStorage.setItem("token", res.data);
	// 		// window.location = "/";
	// 	} catch (error) {
	// 		if (
	// 			error.response &&
	// 			error.response.status >= 400 &&
	// 			error.response.status <= 500
	// 		) {
	// 			setError(error.response.data.message);
	// 		}
	// 	}
	// };

  return (
    <div className='hasilKanan'>
        <div className='hasilKanan-container'>
            <img src={border} />
                <div className='bubble-text'>
                   {/* <p id="ubahKanan">Penjelasan tentang hasil sesuai pilihan yang diklik Berikut dengan rekomendasi dan contoh jurusan apabila mengikuti tes jurusan</p>  */}
                   <p>{props.kalimat} {props.skill} {props.percentage} </p>
                    <p>{props.penjelasan}</p>
                </div>
                <div className='buttons'>
                <Link to="/tesKuliah">
                    <button className="btn" onClick={() => {
                    }}
                    > 
                    Ulangi Tes 
                    </button>
                    
                </Link>
                </div>
                <div className='border-bawah'>
                <img src={border} />
                </div>
                 {/* <div className='buttons'>
                <button className="btn" onClick={() => {
                    handleSimpan();
                    setOpenModalKanan(true);
                    setShow(!show);
                    }}
                    > 
                    Simpan
                    </button>
                    {openModalKanan && <ModalHasilKanan closeModalKanan={setOpenModalKanan}/>}
                </div> */}
           {/* {show && <img src={border} />} */}
        </div>
    </div>
  )
}


export default HasilKanan