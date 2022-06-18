import React from 'react'
import PenjelasanKanan from './PenjelasanKanan'
import PenjelasanKiri from './PenjelasanKiri'
import ParentKiri from './ParentKiri';
import { useState } from "react";
import './Penjelasan.css';
import Navbar from '../Navbar/Navbar';
import PenjelasanPic from "../Pic/GayaBelajar.png"
// import datas from './DataPenjelasan';

const Penjelasan = () => {
    const [penjelasanTes, setPenjelasanTes] = useState("Menjelaskan tentang tes");
    const [imagePenjelasan, setImagePenjelasan] = useState(PenjelasanPic);

    function handlePenjelasanTes(teks) {
        setPenjelasanTes(teks);
      }

      function handleImagePenjelasan(gbr) {
        setImagePenjelasan(gbr)
      } 

    
  //     let something
  // { something = datas.map((data) => {
  //   return (
  //     <div className='penjelasan'>
  //         <Navbar /> 
  //         <div className='penjelasan-container'>
  //             <div className='penjelasan-kiri'>
  //                 <PenjelasanKiri 
                    
  //                   key={data.id}
  //                   category={data.category}
  //                   penjelasanTes={data.penjelasanTes}
  //                   imagePenjelasan={data.imagePenjelasan}
  //                   ubahBagianKanan={props.handlePenjelasanTes}
  //                 />
  //             </div>
  //             <div className='penjelasan-kanan'>
  //                 <PenjelasanKanan penjelasanTes={penjelasanTes}/>
  //             </div>
  //         </div>
  //     </div>
  //   )
  // })}

  return (
    <div className='penjelasan'>
        <Navbar /> 
        <div className='penjelasan-container'>
            <div className='penjelasan-kiri'>
                <ParentKiri ubahBagianKanan={handlePenjelasanTes}/>
            </div>
            <div className='penjelasan-kanan'>
                <PenjelasanKanan penjelasanTes={penjelasanTes}/>
            </div>
        </div>
    </div>
  )
}

export default Penjelasan