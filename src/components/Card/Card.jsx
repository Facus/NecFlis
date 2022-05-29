import React from 'react'
import { tryGetMediaImg } from '../../apiConfig'
import './Card.css'

const Card = ({ title, imgPath }) => {
    const url = tryGetMediaImg(imgPath)
  return (
    <div>
        <div className="card" style={{ backgroundImage: `url(${url})`, }}>
            <h4 className="card-title">{title}</h4>
        </div>
    </div>
  )
}

export default Card