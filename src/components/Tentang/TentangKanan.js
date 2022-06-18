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
                    <p>Menjelaskan tentang aplikasi</p>
                </div>
            
                <div className='border-tentang'>
            <img src={borderTtg} />
            </div>
        </div>
    </div>
  )
}

export default TentangKanan