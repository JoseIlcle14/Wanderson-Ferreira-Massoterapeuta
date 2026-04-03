import whatsappicon from "../assets/imagens/whatzap-icon.png"

export function WhatzAppButton(){
    return(
        <div className="bg-[#6B502E] text-3xl w-75 p-3 pl-5 font-bold text-white rounded-4xl flex gap-4 items-stretch shadow-lg">
            <h2>Agende Agora!</h2>
            <div className="h-9 w-9 self-center "><img src={whatsappicon}/></div>
        </div>
    )
}