import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './HasilKiri.css';
import './HasilChild';
import HasilChild from './HasilChild';
import simbol from '../Pic/simbol.png';
import tes from '../Tes/Tes';
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
        axios.get("http://localhost:4000/api/getHasilRiasec")
    .then(({ data}) => setHasil(data)) // <-- set state
    .catch(e => console.log(e))
      });

    console.log(props)
  return (
    <div className='HasilKiri'>
        {/* {items.map(() => {
            return(
                return
            )
        })} */}
        {/* <Navbar /> */}
        <div className='hasilContainer'>
            {items.map((item) => {
                return(
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
        {/* <div className='hasilContainer'>
            <HasilChild />
        </div>
        <div className='hasilContainer'>
            <HasilChild />
        </div>
        <div className='hasilContainer'>
            <HasilChild />
        </div>
        <div className='hasilContainer'>
            <HasilChild />
        </div>
        <div className='hasilContainer'>
            <HasilChild />
        </div> */}
    </div>
  )
}

export default HasilKiri