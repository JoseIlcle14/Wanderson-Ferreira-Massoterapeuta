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
        <div className="pt-10">
            <div className="flex gap-40 text-[#372E22]">
                 <div className="flex w-80 items-center">
                    <div><img src={point} className="w-13 h-13"/></div>
                    <div>
                        <div className="text-2xl">
                            <h1>{titulo}</h1>
                        </div>
                        <p className="whitespace-pre-line">{local}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-xl">
                    <div><img src={time} className="w-13 h-13"/></div>
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