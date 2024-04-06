import { useEffect, useState } from 'react'
import './cardmovie.css'
export default (({ nome, ano, score, url }) => {

    URL = 'https://st.depositphotos.com/1653909/1228/i/950/depositphotos_12283193-stock-photo-movie-clapper-and-film-reels.jpg'

    return (
        <div className="container_card_movie">
            <div className='card_content'>
                <img src={"https://image.tmdb.org/t/p/w220_and_h330_face/"+url} />
                <div className='card_content_txt'>
                    <p style={{ fontWeight: 'bold', fontSize: 17 }}>{nome}</p>
                    <p style={{ fontSize: 15, fontWeight: 'none'}}>{ano}</p>
                    <p style={{ fontSize: 13 }}>{score}</p>
                </div>
            </div>
        </div>
    )
})