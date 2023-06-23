
import "./cards.css"

import React from 'react'

const Cards = ({img,title,price}) => {
  return (
    <div className='mycards'>
        <img src={img} alt="" />
        <span>{title}</span>
        <span> {price}</span>
    </div>
  )
}

export default Cards