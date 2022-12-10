import React from 'react'
import Popup from "reactjs-popup";
import ".././styles/ModalLarge.css"



export default function Modal() {
  return (
    <Popup modal trigger={<button>Click Me</button>}>
    <div className='modal-large'>
        <img src='https://znews-photo.zingcdn.me/w660/Uploaded/mdf_vsxrlu/2021_01_22/meo_3_1.jpg'/>
    </div>
    </Popup>
  )
}


