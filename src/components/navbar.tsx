import { Link } from "react-router-dom"

export function Navbar(){
    return(
        <div className="flex h-full p-4 bg-[#6B502E] md:h-20 items-stretch justify-between md:p-12">
            <div className="text-white w-30 text-[12px] md:text-[24px] font-serif md:w-60 self-center">
               <Link to="/"><h1>Wanderson Ferreira MASSOTERAPEUTA</h1></Link> 
            </div>
            
            <ul className="text-white text-[13px] md:text-[18px] font-bold grid grid-flow-col gap-10 self-center ">
                <Link to={"/serviços"}><li> Serviços</li></Link> 
            </ul>
            
        </div>
    )
}