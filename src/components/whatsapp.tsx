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
            <div className="bg-[#6B502E] w-30 md:w-75 p-1 pl-2 md:p-3 md:pl-5 font-bold text-white rounded-4xl flex gap-2 md:gap-4 shadow-lg cursor-pointer">
                <div className="flex gap-3 justify-center items-center text-[10px] md:text-3xl">
                    <p>Agende Agora</p>
                    <div className="h-5 w-5 md:h-9 md:w-9 self-center "><img src={whatsappicon}/></div>
                </div>
            </div>
        </a>
    )
}