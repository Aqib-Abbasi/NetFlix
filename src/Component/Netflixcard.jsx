import React from 'react'

const Netflixcard = ({sname,imgsrc,title,links}) => {
  return (
    <>
    <div className="cards">
    <div className="card">
        <img src={imgsrc} alt="mypic" className="card_img"/>
        <div className="card_info">
            <span className="card_category">{title}</span>
            <h3 className="card_title">{sname}</h3>
            <a href={links}>
            <button>Watch Now</button>
            </a>
        </div>
    </div>

    </div>
    </>
  )
}

export default Netflixcard