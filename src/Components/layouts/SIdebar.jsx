import '../layouts/sidebar.css'
import { BsBook, BsCamera, BsCameraVideoFill, BsGlobe, BsList, BsPerson } from "react-icons/bs";
export default (() => {
    return (
        <div className="container_sidebar">
            <BsCameraVideoFill style={{margin: 50, fontSize: 40}}/>
            <div className='container_links'>
                <div className='link_unitario'>
                    <BsPerson />
                    <a href=""> Atores</a>
                </div>
                <div className='link_unitario'>
                    <BsBook />
                    <a href=""> Historias</a>
                </div>
                <div className='link_unitario'>
                    <BsCamera />
                    <a href=""> Direção</a>
                </div>
                <div className='link_unitario'>
                    <BsGlobe />
                    <a href=""> Exlporar</a>
                </div>

                <div className='link_unitario'>
                    <BsList />
                    <a href=""> Categorias</a>
                </div>
            </div>
        </div>
    )
})