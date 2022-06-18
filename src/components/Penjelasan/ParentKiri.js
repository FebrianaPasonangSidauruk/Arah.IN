import React from 'react'
import datas from './DataPenjelasan';
import PenjelasanKiri from './PenjelasanKiri';
import { Link } from 'react-router-dom';

const ParentKiri = (props) => {
  console.log(props)
  return (
    <div className='parentKiri'>
        {datas.map((data) => {
                return(
                    <PenjelasanKiri               
                     key={data.id}
                     category={data.category}
                     penjelasanTes={data.penjelasanTes}
                     imagePenjelasan={data.imagePenjelasan}
                     ubahBagianKanan={props.ubahBagianKanan}
                   />
                )
            })}
    </div>
  )
}

export default ParentKiri