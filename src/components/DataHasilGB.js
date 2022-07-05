import React from 'react'
import {BsPlayCircle} from 'react-icons/bs';
import simbol from './Pic/simbol.png';

var DataHasilGB = [
    {
        id: '1',
        icon: <BsPlayCircle style={{ fill:'#B48336', fontSize: "2em"}}/>,
        skill: 'Visual',
        percentage: '70%',
        batas:simbol,
        penjelasan: 'Gaya belajar visual dapat menyerap informasi dari apa yang dilihat oleh mata. Disarankan untuk menggunakan variasi warna ketika mencatat, memilih buku bacaan dengan banyak gambar ilustrasi dan warna menarik, dan mencatat kembali bahan pelajaran dengan warna dan gambar yang menarik.',
    },
    {
        id: '2',
        icon: <BsPlayCircle style={{ fill:'#B48336', fontSize: "2em"}}/>,
        skill: 'Auditory',
        percentage: '40%',
        batas:simbol,
        penjelasan: 'Gaya belajar auditori yang menyerap informasi dengan cara mendengar. Disarankan menggunakan voice recorder saat mendengarkan penjelasan, mendengarkan buku audio, memperbanyak presentasi dan tanya jawab.',
    },
    {
        id: '3',
        icon: <BsPlayCircle style={{ fill:'#B48336', fontSize: "2em"}}/>,
        skill: 'Kinesthetic',
        percentage: '20%',
        batas:simbol,
        penjelasan: 'Gaya belajar kinesthetic ini menyerap informasi dengan berinteraksi atau mengalami hal-hal disekitarnya. Disarankan dalam belajar menggunakan gerakan gerakan atau eksperimen, hindari belajar yang monoton, dan melibatkan bermain peran dan praktikan',
    },
];

export default DataHasilGB