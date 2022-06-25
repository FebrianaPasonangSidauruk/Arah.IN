import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './HasilKiri.css';
import './HasilChild';
import HasilChild from './HasilChild';
import simbol from '../Pic/simbol.png';
import tes from '../TesKuliah/TesKuliah';
import items from '../DataHasil';
import axios from 'axios';


const HasilKiri = (props) => {
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
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:4000/api/getHasilRiasec/${localStorage.getItem("id")}`)
                .catch(e => console.log(e))
            setHasil(response.data)
        }
        fetchData();
    }, []);

    return (
        <div className='HasilKiri'>
            <div className='hasilContainer'>
                {items.map((item) => {
                    return (
                        <HasilChild
                            key={item.id}
                            icon={item.icon}
                            skill={item.skill}
                            percentage={hasil[item.id - 1].percentage}
                            batas={item.batas}
                            penjelasan={item.penjelasan}
                            ubahKanan={props.ubahKanan}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default HasilKiri