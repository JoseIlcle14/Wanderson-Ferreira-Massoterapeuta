import whatsappicon from "../assets/imagens/whatzap-icon.png"
type WhatzAppButtonProps ={
    numero : string;
}

export function WhatzAppButton({numero}:WhatzAppButtonProps){
    const mensagem = "Olá, vim pelo site, gostaria de agendar uma sessão."
    const mensagemFormatada = encodeURIComponent(mensagem);
    const link: string = `https://wa.me/${numero}?text=${mensagemFormatada}`;

    return(
        <a href={link}>
            <div className="bg-[#6B502E] text-3xl w-75 p-3 pl-5 font-bold text-white rounded-4xl flex gap-4 items-stretch shadow-lg cursor-pointer">
                <div className="flex gap-4">
                    <p>Agende Agora</p>
                    <div className="h-9 w-9 self-center "><img src={whatsappicon}/></div>
                </div>
            </div>
        </a>
    )
}