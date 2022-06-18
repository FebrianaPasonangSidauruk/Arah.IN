import React from 'react'
import './TentangKiri.css'
import gbrTtg from '../Pic/aboutPic.png';

const TentangKiri = () => {
  return (
    <div className='tentangKiri'>
        {/* <Navbar/> */}
        <div className='tentangKiri-container'>
            <div className='gbr-tentang'>
            <img src={gbrTtg} />
            </div>
        </div>
    </div>
  )
}

export default TentangKiri