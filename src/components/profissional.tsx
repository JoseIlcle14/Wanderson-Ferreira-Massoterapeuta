import profissional from "../assets/imagens/wanderson.webp";

export function Profissional(){
    return(
        <div className="flex flex-col font-serif gap-10 pb-10">
            <div className="text-4xl text-[#6B502E] font-bold">
                <h1>SOBRE O PROFISSIONAL</h1>
            </div>
            <div className="flex gap-10">
                <div className="h-50 w-50">
                    <img src={profissional} className="rounded-full border-5 border-[#9A7240]"/>
                </div>
                <div className="w-140 pt-6 space-y-5 font-sans text-[#6B502E]">
                    <p>Wanderson Ferreira, 27 anos, é massoterapeuta profissional especializado em técnicas de relaxamento, terapias musculares e alívio de tensões.</p>
                    <p>
                    Com um toque preciso e sensível, proporciona uma experiência personalizada voltada ao bem-estar integral, promovendo equilíbrio corporal, redução do estresse e um profundo estado de relaxamento.
                    </p>
                </div>
            </div>
        </div>
    )
}