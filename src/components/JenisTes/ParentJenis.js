import React from 'react'
import JenisTes from './JenisTes'
import jnsTesData from './JenisTesData'

const ParentJenis = (props) => {
  return (
    <div className='parentjenis'>
        <JenisTes/>
       {/* {jnsTesData.map((jnsTes) => {
           return(
               <JenisTes 
                    // idjenis={jnsTes.idjenis}
                    // gambar={jnsTes.gambar}
                    // nama={jnsTes.nama}
                    // keterangan={jnsTes.keterangan}
                    // play={jnsTes.play}
                    // ubahPopUp={props.ubahPopUp}
               />
           )
       })} */}
    </div>
  )
}

export default ParentJenis