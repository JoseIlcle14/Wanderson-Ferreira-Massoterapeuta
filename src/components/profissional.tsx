import profissional from "../assets/imagens/wanderson.webp";

export function Profissional(){
    return(
        <div className="flex flex-col font-serif gap-10 pb-10 pt-5">
            <div className="text-xl md:text-4xl text-[#6B502E] font-bold">
                <h1>SOBRE O PROFISSIONAL</h1>
            </div>
            <div className="flex gap-2 md:gap-10">
                <div className=" h-30 w-30 md:h-50 md:w-50">
                    <img src={profissional} className="rounded-full border-3 md:border-5 border-[#9A7240] shadow-2xl shadow-black/40"/>
                </div>
                <div className="text-[10px] md:text-[15px] w-full md:w-140 md:pt-6 space-y-5 font-sans text-[#6B502E]">
                    <p>Wanderson Ferreira, é massoterapeuta profissional especializado em técnicas de relaxamento, terapias musculares e alívio de tensões.</p>
                    <p>
                    Com um toque preciso e sensível, proporciona uma experiência personalizada voltada ao bem-estar integral, promovendo equilíbrio corporal, redução do estresse e um profundo estado de relaxamento.
                    </p>
                </div>
            </div>
        </div>
    )
}