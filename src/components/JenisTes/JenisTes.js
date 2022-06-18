import React from 'react'
import JenisTesData from './JenisTesData';
import {BsPlayCircle} from 'react-icons/bs';
// import styled from "styled-components";
import GayaBelajar from '../Pic/GayaBelajar.png';
import jurusanSMA from '../Pic/jurusanSMA.png';
import jurusanKuliah from '../Pic/jurusanKuliah.png';
import './JenisTes.css';
import Navbar from '../Navbar/Navbar';
import KeteranganGayaBlj from './KeteranganGayaBlj';
import { Link } from 'react-router-dom';
import { useState } from "react";
import KeteranganBdgSma from './KeteranganBdgSma';
import KeteranganKuliah from './KeteranganKuliah';

const JenisTes = () => {
    const [openModalGayaBlj, setOpenModalGayaBlj] = useState(false);
    const [openModalBdgSma, setOpenModalBdgSma] = useState(false);
    const [openModalKuliah, setOpenModalKuliah] = useState(false);
  return (
    <div className='Jenistes'>
        <Navbar />
    <div className='jenis-tes'>
        <div className='JenisTes-container'>
                    {/* <div className='jenistes'> */}
                        <div className='column-jenis'>
                        <div className='gambar-jenis'>
                            <img src={GayaBelajar} alt="gambar jenis tes" />
                        </div>
                        <div className='nama-tes'>
                            <h4>Gaya Belajar</h4>
                            <div className='play' onClick={() => {
                                setOpenModalGayaBlj(true);
                                }}>
                                    <BsPlayCircle/>
                                {/* {openModalGayaBlj && <KeteranganJenisTes 
                                closeModalGayaBlj={setOpenModalGayaBlj}
                                />} */}
                            </div>
                            {openModalGayaBlj && <KeteranganGayaBlj
                                closeModalGayaBlj={setOpenModalGayaBlj}
                                />}
                        </div>
                        </div>

                        <div className='column-jenis'>
                        <div className='gambar-jenis'>
                            <img src={jurusanSMA} alt="gambar jenis tes" />
                        </div>
                        <div className='nama-tes'>
                            <h4>Peminatan</h4>
                            <div className='play' onClick={() => {
                                setOpenModalBdgSma(true);
                                }}>
                                    <BsPlayCircle/>
                                {/* {openModalGayaBlj && <KeteranganJenisTes 
                                closeModalGayaBlj={setOpenModalGayaBlj}
                                />} */}
                            </div>
                            {openModalBdgSma && <KeteranganBdgSma
                                closeModalBdgSma={setOpenModalBdgSma}
                                />}
                        </div>
                        </div>

                        <div className='column-jenis'>
                        <div className='gambar-jenis'>
                            <img src={jurusanKuliah} alt="gambar jenis tes" />
                        </div>
                        <div className='nama-tes'>
                            <h4>Karir</h4>
                            
                            <div className='play' onClick={() => {
                                setOpenModalKuliah(true);
                                }}>
                                    <BsPlayCircle/>
                                {/* {openModalGayaBlj && <KeteranganJenisTes 
                                closeModalGayaBlj={setOpenModalGayaBlj}
                                />} */}
                            </div>
                            {openModalKuliah && <KeteranganKuliah
                                closeModalKuliah={setOpenModalKuliah}
                                />}
                        </div>
                    </div>
                    </div>
        </div>
        </div>
    // </div>
  );
}

export default JenisTes