import Search from './Search/Search'
import './home.css'
import { useEffect, useState } from 'react'
import CardMovie from './CardMovie/CardMovie'
import data from './API/Api'
import logo from '../assets/Logo.png'

export default (() => {

    const [busca, setBusca] = useState('')
    const [listaFiltro, setListaLivro] = useState([])
    const [atualizou, setAtualizou] = useState(false)

    useEffect(() => {
        data.response.then((data) => {
            setListaLivro(JSON.parse(data).results)
        })
    }, [])

    useEffect(() => {
        data.buscarFilmesPorAno(2024-busca)
            .then(filmes => {
                setListaLivro(filmes)
                console.log('Filmes encontrados:', filmes);
                setAtualizou(false)
            });
    }, [atualizou])

    function setNome(e) {
        setBusca(e.target.value)
        console.log(busca)
    }

    function buscarNome() {
        setAtualizou(true)
    }

    return (
        <div className='container_home'>

            <div className='search_container'>
                <img className='logo' src={logo} alt="" />
                <p className='frase'>Os filmes mais populares do ano que você nasceu</p>
                <Search setNome={setNome} buttonSearch={buscarNome} />
            </div>

            <div className='container_list'>
                {listaFiltro.map((filme) => (
                    <CardMovie key={filme.id} nome={filme.title} popularidade={filme.popularity} ano={filme.release_date} url={filme.poster_path} />
                ))}
            </div>

        </div>
    )
})