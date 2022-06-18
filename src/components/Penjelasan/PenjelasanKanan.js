import React from 'react'
import border from '../Pic/border.png';
import pembicara from '../Pic/pembicara.png';
import './PenjelasanKanan.css'

const PenjelasanKanan = (props) => {
  return (
    <div className='penjelasanKanan'>
        <div className='penjelasanKanan-container'>
            <div className='border-penjelasan'>
            <img src={border} />
            </div>
                <div className='box-pembicara'>
                    <img src={pembicara} />
                </div>
                <div className='box-penjelasanTes'>
                    {/* <p>Menjelaskan petunjuk tentang cara mengerjakan tes</p> */}
                    <p>{props.penjelasanTes}</p>
                </div>
            
                <div className='border-penjelasan'>
            <img src={border} />
            </div>
        </div>
    </div>
  )
}

export default PenjelasanKanan