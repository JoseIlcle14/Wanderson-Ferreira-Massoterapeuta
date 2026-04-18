import point from "../assets/icons/point.png";
import time from "../assets/icons/clock.png";
import { GoogleMapsButtom } from "./googleMaps";
type LocalPros = {
    titulo : string;
    local : string;
    horario : string;
    link : string;
}


export function Localizacao({titulo,local, horario, link} : LocalPros ){
    return(
        <div className="pt-5 md:pt-10">
            <div className="flex flex-col md:flex md:flex-row gap-2 md:gap-40 text-[#372E22]">
                 <div className="w-full flex md:w-80 items-center gap-2">
                    <div><img src={point} className=" w-5 h-5 md:w-13 md:h-13"/></div>
                    <div>
                        <div className=" md:text-2xl">
                            <h1>{titulo}</h1>
                        </div>
                        <p className="whitespace-pre-line">{local}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-[15px] md:text-xl">
                    <div><img src={time} className="w-5 h-5 md:w-13 md:h-13"/></div>
                    <p className="whitespace-pre-line">{horario}</p>
                </div>
            </div>
            <div>
                <GoogleMapsButtom
                link={link}/>
            </div>
        </div>
    )
    
}