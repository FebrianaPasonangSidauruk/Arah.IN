import React from 'react'
import borderPenjelasan from '../Pic/border.png';
import pembicaraPenjelasan from '../Pic/pembicara.png';
import './PenjelasanGBKanan.css'
import { Link } from 'react-router-dom';

const PenjelasanGBKanan = () => {
  return (
    <div className='PenjelasanGBKanan'>
        <div className='penjelasanGBKanan-container'>
            <div className='border-penjelasan'>
            <img src={borderPenjelasan} />
            </div>
                {/* <div className='box-pembicaraPenjelasan'>
                    <img src={pembicaraPenjelasan} />
                </div> */}
                <div className='box-penjelasanGB'>
                    <p>Tes Gaya Belajar adalah tes yang bertujuan untuk mengenali bagaimana cara belajar yang paling efektif untuk kamu. Melalui cara belajar yang tepat, diharapkan kamu dapat memaksimalkan potensi belajarmu. Ada tiga jenis gaya belajar, yaitu Visual, Auditory, dan Kinesthetic.</p>
                </div>
                <Link to="/tesGayaBelajar">
                    <button className="tombolPenjelasan"> Ikuti Tes </button>
                    </Link>
            
                    <div className='border-penjelasan-bawah'>
            <img src={borderPenjelasan} />
            </div>
        </div>
    </div>
  )
}

export default PenjelasanGBKanan