import React, {useState, useEffect} from 'react'
import {BsPlayCircle} from 'react-icons/bs'
import './HasilChild.css'
import { Link } from 'react-router-dom';
import simbol from '../Pic/simbol.png';

const HasilChild = ({key, icon, skill, percentage, batas, penjelasan, ubahKanan}) => {
    const [style, setStyle] = useState ()

    useEffect(() => {
        setTimeout(() => {
          const newStyle = {
            opacity: 1,
            width: `${percentage}`,
          };
          console.log(newStyle);
          setStyle(newStyle);
        }, 1000);
        
    }, [percentage])


  return (
    <div className='hasilChild'>
        <div className='hasil-content'>
          <div className='atas'>
            <h1>{skill}</h1>
            <div className='icon' onClick={() => ubahKanan(penjelasan)}>
                  {/* <BsPlayCircle style={{fontSize:'3rem', color:'#B48336'}}/> */}
                  {icon}
          </div>
          <div className='tengah'>
            <div className='skill-bar'>
              <div className='progress' style={style}>
                  <span>{percentage}</span>
              </div>
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

export default HasilChild