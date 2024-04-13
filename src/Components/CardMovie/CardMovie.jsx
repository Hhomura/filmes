import { useEffect, useState } from 'react'
import './cardmovie.css'
export default (({ nome, ano, popularidade, url }) => {

    return (
        <div className="container_card_movie">
            <div className='card_content'>
                <img src={"https://image.tmdb.org/t/p/w220_and_h330_face/"+url} />
                <div className='card_content_txt'>
                    <p style={{ fontWeight: 'bold', fontSize: 17 }}>{nome}</p>
                    <p style={{ fontSize: 15, fontWeight: 'none'}}>{ano}</p>
                    <p style={{ fontSize: 13 }}>Popularidade: {popularidade}</p>
                </div>
            </div>
        </div>
    )
})