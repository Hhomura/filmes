import { Outlet } from "react-router-dom"
import SIdebar from "./src/Components/layouts/SIdebar"
import './src/App.css'
export default (() =>{
    
    return(
        <div className="container_main">
            <SIdebar/>
            <Outlet/>
        </div>
    )
})