import React from 'react'
import borderTtg from '../Pic/border.png';
import pembicaraTtg from '../Pic/pembicara.png';
import './TentangKanan.css'

const TentangKanan = () => {
  return (
    <div className='tentangKanan'>
        <div className='tentangKanan-container'>
            <div className='border-tentang'>
            <img src={borderTtg} />
            </div>
                <div className='box-pembicarattg'>
                    <img src={pembicaraTtg} />
                </div>
                <div className='box-penjelasantentang'>
                    <p>Aplikasi Arah.In adalah aplikasi yang membantu pelajar di tingkat SD, SMP, dan SMA dalam menentukan minat dan bakatnya. Terdapat 3 jenis tes yang bisa dicoba, yaitu Tes Gaya Belajar, Tes Peminatan SMA, dan Tes Jurusan Kuliah.</p>
                </div>
            
                <div className='border-tentang'>
            <img src={borderTtg} />
            </div>
        </div>
    </div>
  )
}

export default TentangKanan