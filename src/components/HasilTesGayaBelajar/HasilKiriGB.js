import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './HasilKiriGB.css';
import HasilChildGB from './HasilChildGB';
import simbol from '../Pic/simbol.png';
import tesGayaBelajar from '../TesGayaBelajar/TesGayaBelajar';
import itemsGB from '../DataHasilGB';
import axios from 'axios';

const HasilKiriGB = (props) => {
    const [hasil, setHasil] = useState([
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
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://arahin1.herokuapp.com/api/getHasilGayaBelajar/${localStorage.getItem("id")}`)
                .catch(e => console.log(e))
            setHasil(response.data)
        }
        fetchData();
    }, []);

  return (
    <div className='HasilKiriGB'>
            <div className='hasilContainer'>
            <div className='judul'>
      <h1>Persentase Kecocokan</h1>
      </div>
                {itemsGB.map((item) => {
                    return (
                        <HasilChildGB
                            keyGB={item.id}
                            icon={item.icon}
                            skill={item.skill}
                            percentage={hasil[item.id - 1].percentage}
                            batas={item.batas}
                            penjelasan={item.penjelasan}
                            ubahKanan={props.ubahKanan}
                            ubahKananSkill={props.ubahKananSkill}
                            ubahKananPercentage={props.ubahKananPercentage}
                            ubahKananKalimat={props.ubahKananKalimat}
                        />
                    )
                })}

            </div>
        </div>
  )
}

export default HasilKiriGB