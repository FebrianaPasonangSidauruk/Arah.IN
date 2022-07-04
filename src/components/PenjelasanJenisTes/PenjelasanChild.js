import React, {useState, useEffect} from 'react'
import './PenjelasanChild.css'
import simbol from '../Pic/simbol.png';

const PenjelasanChild = ({keypenjelasan, gambar, penjelasan, nama,icon, ubahKanan}) => {
  
    return (
        <div className='penjelasanChild'>
        <div className='penjelasan-content' onClick={() => ubahKanan(penjelasan)}>
          <div className='atas'>
          <h1>{nama}</h1>
          <div className='tengah'>
          <div className='icon' onClick={() => ubahKanan(penjelasan)}>
                  {/* <BsPlayCircle style={{fontSize:'3rem', color:'#B48336'}}/> */}
                  {icon}
          </div>
            <div className='gambar'>
                    {/* <BsPlayCircle style={{fontSize:'3rem', color:'#B48336'}}/> */}
                    {/* {gambar} */}
                    {/* <img src={require( `${ gambar }` )} /> */}
            </div>
          </div>
        </div>

      </div>
        <div className='bawah'>
                <div className='border-kiri'>
                  <img src={simbol} alt="Simbol"/>
                </div>
        </div>
    </div>
  )
}

export default PenjelasanChild