import { BsSearch } from "react-icons/bs"
import './search.css'

export default (({setNome, buttonSearch}) =>{
    return(
        <div className="container_search_search">
            <BsSearch style={{ color: "black"}} onClick={buttonSearch}/>
            <input className="container_search" type="text" name="" id="" placeholder="Digite Seu Filme" onChange={setNome}/>  
        </div>
    )
})