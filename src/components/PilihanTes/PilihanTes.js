import React from 'react'
import "./PilihanTes.css";
import Card from "./Card";
import JenisTesData from "./JenisTesData";
import Navbar from '../Navbar/Navbar';
import simbol from '../Pic/simbol.png';
import GayaBelajar from '../Pic/GayaBelajar.png';
import jurusanSMA from '../Pic/jurusanSMA.png';
import jurusanKuliah from '../Pic/jurusanKuliah.png';
import { Link } from 'react-router-dom';

const PilihanTes = () => {
  return (
      <div className='PilihanTes'>
          <Navbar />
          <div className='Pilihan-container'>
              <div className='row new'>
                <div className='Box'>
                <simbol src={simbol} alt="Simbol"/>
                <div className='JenisTes'>
                <img src={GayaBelajar} />
                </div>
                {/* <img src={simbol} alt="Simbol"/> */}
                <Link to="/Tes">
                        <button className="tombol"> Gaya Belajar </button>
                        </Link>
                </div>
                <div className='Box'>
                {/* <img src={simbol} alt="Simbol"/> */}
                <div className='JenisTes'>
                <img src={jurusanSMA} />
                </div>
                {/* <img src={simbol} alt="Simbol"/> */}
                <Link to="/Tes">
                        <button className="tombol"> Peminatan SMA </button>
                        </Link>
                </div>
                <div className='Box'>
                {/* <img src={simbol} alt="Simbol"/> */}
                <div className='JenisTes'>
                <img src={jurusanKuliah} />
                </div>
                {/* <img src={simbol} alt="Simbol"/> */}
                <Link to="/Tes">
                        <button className="tombol"> Jurusan Kuliah </button>
                        </Link>
                </div>
              </div>
          </div>

      </div>

//     <>
//     <Navbar />
//     <section className='PilihanTes top' id='pilihantes'>
//       <div className='container-pilihanTes'>
//         {/* <div className='heading text-center '>
//           <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
//           <h1>My Portfolio</h1>
//         </div> */}

//         <div className='content grid'>
//           {JenisTesData.map((value, index) => {
//             return <Card key={index} image={value.image} category={value.category} title={value.title} />
//           })}

//           {/*<div className='box btn_shadow '>
//             <div className='img'>
//                 <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
//             </div>
//             <div className='category d_flex'>
//                 <span>Development</span>
//                 <label>
//                   <i className='far fa-heart'></i> 360
//                 </label>
//             </div>
//             <div className='title'>
//                 <h2>Mobile app landing design & Services</h2>
//               <a href='' className='arrow'>
//                 <i class='fas fa-arrow-right'></i>
//               </a>
//             </div>
//           </div>*/}
//         </div>
//       </div>
//     </section>
//   </>
  )
}

export default PilihanTes