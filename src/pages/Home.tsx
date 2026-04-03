import {Link} from "react-router-dom"
import {Navbar} from "../components/navbar"
export function Home(){
    return(
        <>
        <Navbar/>
        <p className="bg-blue-900 w-20">
            <Link to={"/serviços"}> Ir para serviços</Link>
        </p>
        </>
    )
}