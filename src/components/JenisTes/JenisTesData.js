import React from 'react'
import {BsPlayCircle} from 'react-icons/bs';
// import styled from "styled-components";
import GayaBelajar from '../Pic/GayaBelajar.png';
import jurusanSMA from '../Pic/jurusanSMA.png';
import jurusanKuliah from '../Pic/jurusanKuliah.png';

const JenisTesData = [
    {
        idjenis:1,
        gambar: GayaBelajar,
        nama: "Tes Gaya Belajar",
        keterangan: "Tes Gaya Belajar",
        play: <BsPlayCircle style={{ fill:'#fff'}}/>,
    },
    {
        idjenis:2,
        gambar: jurusanSMA,
        nama: "Tes Bidang Peminatan",
        keterangan: "Tes Bidang Peminatan",
        play: <BsPlayCircle style={{ fill:'#fff'}}/>,
    },
    {
        idjenis:3,
        gambar: jurusanKuliah,
        nama: "Tes Bidang Karier",
        keterangan: "Tes Bidang Karier",
        play: <BsPlayCircle style={{ fill:'#fff'}}/>,
    },

];

export default JenisTesData