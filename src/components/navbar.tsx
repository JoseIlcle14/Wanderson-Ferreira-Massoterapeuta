import { Link } from "react-router-dom"

export function Navbar(){
    return(
        <div className="bg-[#6B502E] h-20 flex items-stretch justify-between p-12">
            <div className="text-white text-[24px] font-serif w-100 self-center">
               <Link to="/"><h1>Wanderson Ferreira MASSOTERAPEUTA</h1></Link> 
            </div>
            
            <ul className="text-white text-[18px] font-bold grid grid-flow-col gap-10 self-center">
                <Link to={"/serviços"}><li> Serviços</li></Link> 
                <li> Beneficios</li>
                <li> Sobre</li>
            </ul>
            
        </div>
    )
}