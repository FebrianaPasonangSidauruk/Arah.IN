import React from 'react'
import "./PilihanTes.css";
import Navbar from '../Navbar/Navbar';
import simbol from '../Pic/simbol.png';
import GayaBelajar from '../Pic/GayaBelajar.png';
import jurusanSMA from '../Pic/jurusanSMA.png';
import jurusanKuliah from '../Pic/jurusanKuliah.png';
import { Link } from 'react-router-dom';

const PilihanTes = () => {
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
                <Link to="/TesKuliah">
                        <button className="tombol"> Jurusan Kuliah </button>
                        </Link>
                </div>
              </div>
          </div>

      </div>
  )
}

export default PilihanTes