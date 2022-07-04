import React from 'react'
import borderPenjelasan from '../Pic/border.png';
import pembicaraPenjelasan from '../Pic/pembicara.png';
import './PenjelasanKuliahKanan.css'

const PenjelasanKuliahKanan = () => {
  return (
    <div className='PenjelasanKuliahKanan'>
        <div className='penjelasanKuliahKanan-container'>
            <div className='border-penjelasan'>
            <img src={borderPenjelasan} />
            </div>
                <div className='box-pembicaraPenjelasan'>
                    <img src={pembicaraPenjelasan} />
                </div>
                <div className='box-penjelasanKuliah'>
                    <p>Tes Jurusan Kuliah adalah tes yang menyarankan di bidang karier apa yang cocok untuk kamu sesuai dengan minat dan bakatmu sehingga nantinya kamu dapat memaksimalkan dalam pemilihan jurusan kuliah. Ada enam bidang yaitu, Realistic, Investigative, Artistic, Social, Enterprising, dan Conventional.</p>
                </div>
            
                <div className='border-penjelasan'>
            <img src={borderPenjelasan} />
            </div>
        </div>
    </div>
  )
}

export default PenjelasanKuliahKanan