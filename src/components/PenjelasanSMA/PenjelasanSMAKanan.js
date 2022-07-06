import React from 'react'
import borderPenjelasan from '../Pic/border.png';
import pembicaraPenjelasan from '../Pic/pembicara.png';
import './PenjelasanSMAKanan.css'
import { Link } from 'react-router-dom';

const PenjelasanSMAKanan = () => {
  return (
    <div className='PenjelasanSMAKanan'>
        <div className='penjelasanSMAKanan-container'>
            <div className='border-penjelasan'>
            <img src={borderPenjelasan} />
            </div>
                {/* <div className='box-pembicaraPenjelasan'>
                    <img src={pembicaraPenjelasan} />
                </div> */}
                <div className='box-penjelasanSMA'>
                    <p>Tes Peminatan SMA merupakan tes yang cocok untuk kamu pelajar SMP yang baru saja lulus, dimana dengan tes ini kamu dapat lebih menentukan mata pelajaran peminatan apa yang cocok untuk kamu ambil ketika di SMA sehingga dapat memaksimalkan impianmu. Ada enam peminatan yaitu, Fisika, Kimia, Biologi, Geografi, Sosiologi, dan Ekonomi.</p>
                </div>
                <Link to="/tesSMA">
                    <button className="tombolPenjelasan"> Ikuti Tes </button>
                    </Link>
                <div className='border-penjelasan-bawah'>
            <img src={borderPenjelasan} />
            </div>
        </div>
    </div>
  )
}

export default PenjelasanSMAKanan