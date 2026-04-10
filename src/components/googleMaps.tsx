import googlemapsicon from "../assets/icons/google-maps.png"
type LinkProps = {
    link: string;
}

export function GoogleMapsButtom({link}: LinkProps){
    return(
        <div className="pt-8">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="bg-[#1A73E8] w-60 p-2 rounded-2xl flex items-center font-bold text-amber-50">
                    <div className="h-10 w-10">
                        <img src={googlemapsicon}/>
                    </div>
                    <p>Veja pelo Google maps</p>
                </div>
            </a>
        </div>
    )
}