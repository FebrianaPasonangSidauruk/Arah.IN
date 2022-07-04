import React from 'react'
import './PenjelasanKiri.css';
import PenjelasanChild from './PenjelasanChild';
import itemsPenjelasan from './DataPenjelasanTes';

const PenjelasanKiri = (props) => {

    const baseURL='../Pic/'
  return (
    <div className='PenjelasanKiri'>
            <div className='PenjelasanContainer'>
                {itemsPenjelasan.map((item) => {
                    return (
                        <PenjelasanChild
                            keypenjelasan={item.idjenis}
                            gambar={baseURL + item.gambar}
                            penjelasan={item.penjelasan}
                            nama={item.nama}
                            icon={item.icon}
                            ubahKanan={props.ubahKanan}
                        />
                    )
                })}

            </div>
        </div>
  )
}

export default PenjelasanKiri