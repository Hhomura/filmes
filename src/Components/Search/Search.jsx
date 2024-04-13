import { BsSearch } from "react-icons/bs"
import './search.css'

export default (({setNome, buttonSearch}) =>{

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          buttonSearch()
        }
      }

    return(
        <div className="container_search_search">
            <BsSearch style={{ color: "black"}} onClick={buttonSearch}/>
            <input className="container_search" type="text" name="" id="" onKeyUp={handleKeyPress}  placeholder="Digite sua idade" onChange={setNome}/>  
        </div>
    )
})