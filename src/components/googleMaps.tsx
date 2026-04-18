import googlemapsicon from "../assets/icons/google-maps.png"
type LinkProps = {
    link: string;
}

export function GoogleMapsButtom({link}: LinkProps){
    return(
        <div className="pt-4 md:pt-8">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="bg-[#1A73E8] w-30 md:w-70 p-2 mb-2 rounded-2xl flex items-center font-bold text-amber-50 text-[10px] md:text-xl gap-2">
                    <div className=" h-5 w-5 md:h-10 md:w-10">
                        <img src={googlemapsicon}/>
                    </div>
                    <p>Veja pelo Google maps</p>
                </div>
            </a>
        </div>
    )
}