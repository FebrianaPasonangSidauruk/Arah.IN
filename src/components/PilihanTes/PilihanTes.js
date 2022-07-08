import React from 'react'
import "./PilihanTes.css";
import Navbar from '../Navbar/Navbar';
import simbol from '../Pic/simbol.png';
import GayaBelajar from '../Pic/GayaBelajar.png';
import jurusanSMA from '../Pic/jurusanSMA.png';
import jurusanKuliah from '../Pic/jurusanKuliah.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PilihanTes = () => {

  const navigate = useNavigate();

  //Handle Tes Jurusan Kuliah
  const handlePageKuliah = async () => {
    try{
    const hasilRiasecUSer = await axios.get(`https://arahin1.herokuapp.com/api/tampilanRiasec/${localStorage.getItem("id")}`)
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
          console.log(hasilRiasecUSer.data)
          console.log(hasilRiasec)

          if (JSON.stringify(hasilRiasecUSer.data) === JSON.stringify(hasilRiasec)){
            navigate("/penjelasanKuliah");
          }else{
            navigate("/hasilKuliah");
          }
      }
          catch(e){console.error(e)}
  } 

  //Gaya Belajar handling
  const handlePageGayaBelajar = async () => {
    try{
    const hasilGayaBelajarUser = await axios.get(`https://arahin1.herokuapp.com/api/tampilanGayaBelajar/${localStorage.getItem("id")}`)
      const hasilGayaBelajar = [
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
    ];
    console.log(hasilGayaBelajarUser.data)
    console.log(hasilGayaBelajar)

      if (JSON.stringify(hasilGayaBelajarUser.data) === JSON.stringify(hasilGayaBelajar)){
        navigate("/penjelasanGayaBelajar");
      }else{
        navigate("/hasilGayaBelajar");
      }
  }
        catch(e){console.error(e)}
  } 


  // Tes Peminatan SMA Handling
  const handlePageSMA = async () => {
    try{
    const hasilSMAUser = await axios.get(`https://arahin1.herokuapp.com/api/tampilanSMA/${localStorage.getItem("id")}`)
      const hasilSMA = [
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
          console.log(hasilSMAUser.data)
          console.log(hasilSMA)

        if (JSON.stringify(hasilSMAUser.data) === JSON.stringify(hasilSMA)){
          navigate("/penjelasanSMA");
        }else{
          navigate("/hasilSMA");
        }
      }
        catch(e){console.error(e)}
  } 

  return (
      <div className='PilihanTes'>
          <Navbar />
          <div className='Pilihan-container'>
              <div className='rownew'>
                <div className='Box'>
                    <simbol src={simbol} alt="Simbol"/>
                    <div className='JenisTes'>
                      <img src={GayaBelajar} />
                    </div>
                    <button className="tombolPilihan" onClick={()=> handlePageGayaBelajar()}> Gaya Belajar </button>
                </div>
                <div className='Box'>
                    <div className='JenisTes'>
                     <img src={jurusanSMA} />
                    </div>
                    <button className="tombolPilihan" onClick={()=> handlePageSMA()}> Peminatan SMA </button>
                </div>
                <div className='Box'>
                    <div className='JenisTes'>
                      <img src={jurusanKuliah} />
                    </div>
                    <button className="tombolPilihan" onClick={()=> handlePageKuliah()}> Jurusan Kuliah </button>
                </div>
              </div>
          </div>

      </div>
  )
}

export default PilihanTes