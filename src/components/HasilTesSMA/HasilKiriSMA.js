import React, { useState, useEffect } from 'react'
import './HasilKiriSMA.css';
import HasilChildSMA from './HasilChildSMA';
import itemsSMA from '../DataHasilSMA';
import axios from 'axios';

const HasilKiriSMA = (props) => {
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
            const response = await axios.get(`https://arahin1.herokuapp.com/api/getHasilSMA/${localStorage.getItem("id")}`)
                .catch(e => console.log(e))
            setHasil(response.data)
        }
        fetchData();
    }, []);

  return (
    <div className='HasilKiriSMA'>
        <div className='judul'>
      <h1>Persentase Kecocokan</h1>
      </div>
            <div className='hasilContainer'>
                {itemsSMA.map((item) => {
                    return (
                        <HasilChildSMA
                            keySMA={item.id}
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

export default HasilKiriSMA