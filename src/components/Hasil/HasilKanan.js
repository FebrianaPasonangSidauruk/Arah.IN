import React from 'react'
import border from '../Pic/border.png';
import { Link } from 'react-router-dom';
import { useState } from "react";
import './HasilKanan.css';
import ModalHasilKanan from '../ModalHasilKanan';
import items from '../DataHasil';
import axios from "axios";

const HasilKanan = (props, showModalKanan) => {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
    const [openModalKanan, setOpenModalKanan] = useState(false);
    const [show, setShow] = useState(true);

    const handleSimpan = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/simpanhasil";
			const { data: item} = await axios.post(url, data);
			// localStorage.setItem("token", res.data);
			// window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <div className='hasilKanan'>
        <div className='hasilKanan-container'>
            <img src={border} />
                <div className='bubble-text'>
                   {/* <p id="ubahKanan">Penjelasan tentang hasil sesuai pilihan yang diklik Berikut dengan rekomendasi dan contoh jurusan apabila mengikuti tes jurusan</p>  */}
                    <p>{props.penjelasan}</p>
                </div>
                <div className='buttons'>
                <Link to="/tes">
                    <button className="btn" onClick={() => {
                    // setOpenModalKanan(true);
                    // setShow(!show);
                    // showModalKanan(show);
                    }}
                    > 
                    Ulangi Tes 
                    </button>
                    {/* {openModalKanan && <ModalHasilKanan closeModalKanan={setOpenModalKanan}/>} */}
                    
                </Link>
                </div>
                 <div className='buttons'>
                {/* <Link to="/beranda"> */}
                <button className="btn" onClick={() => {
                    handleSimpan();
                    setOpenModalKanan(true);
                    setShow(!show);
                    // showModalKanan(show);
                    }}
                    > 
                    Simpan
                    </button>
                    {openModalKanan && <ModalHasilKanan closeModalKanan={setOpenModalKanan}/>}
                    {/* <ModalHasilKanan/> */}
                {/* </Link> */}
                </div>
           {show && <img src={border} />}
        </div>
    </div>
  )
}


export default HasilKanan