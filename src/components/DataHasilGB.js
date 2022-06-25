import React from 'react'
import {BsPlayCircle} from 'react-icons/bs';
import simbol from './Pic/simbol.png';

var DataHasilGB = [
    {
        id: '1',
        icon: <BsPlayCircle style={{ fill:'#B48336'}}/>,
        skill: 'Visual',
        percentage: '70%',
        batas:simbol,
        penjelasan: 'penjelasan Visual',
    },
    {
        id: '2',
        icon: <BsPlayCircle style={{ fill:'#B48336'}}/>,
        skill: 'Auditory',
        percentage: '40%',
        batas:simbol,
        penjelasan: 'penjelasan auditory',
    },
    {
        id: '3',
        icon: <BsPlayCircle style={{ fill:'#B48336'}}/>,
        skill: 'Kinesthetic',
        percentage: '20%',
        batas:simbol,
        penjelasan: 'penjelasan kinesthetic',
    },
];

export default DataHasilGB