import React from 'react'
import "./PilihanTes.css";
import Navbar from '../Navbar/Navbar';
import simbol from '../Pic/simbol.png';
import GayaBelajar from '../Pic/GayaBelajar.png';
import jurusanSMA from '../Pic/jurusanSMA.png';
import jurusanKuliah from '../Pic/jurusanKuliah.png';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const PilihanTes = () => {
  const handlePageKuliah = () => {
    const hasilRiasecUSer = axios.get(`http://localhost:4000/api/tampilanRiasec/${localStorage.getItem("id")}`)
      .catch(e => console.log(e))
      const hasilRiasec = [
        {
            id: '1',
            percentage: '0%',
        },
        {
            id: '2',
            percentage: '0%',
        },
        {
            id: '3',
            percentage: '0%',
        },
        {
            id: '4',
            percentage: '0%',
        },
        {
            id: '5',
            percentage: '0%',
        },
        {
            id: '6',
            percentage: '0%',
        },
    ];

    if (hasilRiasecUSer == hasilRiasec){
      <Navigate to={"/TesKuliah"} />
    }else{
      <Navigate to={"/hasil"} />
    }
  }
  
  return (
      <div className='PilihanTes'>
          <Navbar />
          <div className='Pilihan-container'>
              <div className='row new'>
                <div className='Box'>
                <simbol src={simbol} alt="Simbol"/>
                <div className='JenisTes'>
                <img src={GayaBelajar} />
                </div>
                <Link to="/TesGayaBelajar">
                        <button className="tombol"> Gaya Belajar </button>
                        </Link>
                </div>
                <div className='Box'>
                <div className='JenisTes'>
                <img src={jurusanSMA} />
                </div>
                <Link to="/TesSMA">
                        <button className="tombol"> Peminatan SMA </button>
                        </Link>
                </div>
                <div className='Box'>
                <div className='JenisTes'>
                <img src={jurusanKuliah} />
                </div>
                {/* <Link to="/TesKuliah"> */}
                        <button className="tombol" onClick={()=> handlePageKuliah()}> Jurusan Kuliah </button>
                        {/* </Link> */}
                </div>
              </div>
          </div>

      </div>
  )
}

export default PilihanTes