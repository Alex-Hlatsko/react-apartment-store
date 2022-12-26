import React from 'react'
import './styles.css'

const Content = ({data}) => {
  return (
    <div className='content flex'>
        <div className="content_img">
            <img src={data.img} alt="img" />
        </div>
        <div className="content_text">
            <h1 className="content_title">{data.title}</h1>
            <p className="content_subtitle">{data.subtitle}</p>
        </div>
    </div>
  )
}

export default Content