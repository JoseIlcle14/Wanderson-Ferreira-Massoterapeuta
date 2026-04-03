import imagem1 from "../assets/imagens/massagem-relaxante.webp";
import imagem2 from "../assets/imagens/pedras-quentes.webp";
import imagem3 from "../assets/imagens/epicraniana.webp";

export function ConjuntoImagem(){
    const imageStyle = "rounded-full border-5 border-[#9A7240]";
    return (
        <div className="flex gap-10 w-auto">
            <div className="flex flex-col gap-30">
                <div className="w-40 h-40">
                    <img src={imagem1} className={imageStyle}/>
                </div>
                
                <div className="w-40 h-40 ">
                    <img src={imagem3} className={imageStyle}/>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-40 h-40">
                    <img src={imagem2} className={imageStyle}/>
                </div>
            </div>
        </div>
    )
}