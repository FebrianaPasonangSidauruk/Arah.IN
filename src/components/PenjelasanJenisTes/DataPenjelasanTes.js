import React from 'react'
import {BsPlayCircle} from 'react-icons/bs';
// import styled from "styled-components";
import GayaBelajar from '../Pic/GayaBelajar.png';
import jurusanSMA from '../Pic/jurusanSMA.png';
import jurusanKuliah from '../Pic/jurusanKuliah.png';

const DataPenjelasanTes = [
    {
        idjenis:1,
        gambar: 'GayaBelajar.png',
        penjelasan: "Tes Gaya Belajar",
        nama : "Tes Gaya Belajar",
        icon: <BsPlayCircle style={{ fill:'#B48336'}}/>,
    },
    {
        idjenis:2,
        gambar: 'jurusanSMA.png',
        penjelasan: "Tes Peminatan SMA",
        nama: "Tes Peminatan SMA",
        icon: <BsPlayCircle style={{ fill:'#B48336'}}/>,
    },
    {
        idjenis:3,
        gambar: 'jurusanKuliah.png',
        penjelasan: "Tes Jurusan Kuliah",
        nama: "Tes Jurusan Kuliah",
        icon: <BsPlayCircle style={{ fill:'#B48336'}}/>,
    },

];

export default DataPenjelasanTes