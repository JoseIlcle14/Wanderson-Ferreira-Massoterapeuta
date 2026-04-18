import imagem1 from "../assets/imagens/massagem-relaxante.webp";
import imagem2 from "../assets/imagens/pedras-quentes.webp";
import imagem3 from "../assets/imagens/epicraniana.webp";

export function ConjuntoImagem(){
    const imageStyle = "rounded-full border-3 md:border-5 border-[#9A7240] shadow-2xl shadow-black/40";
    const imageSize = " w-20 h-20 md:w-40 md:h-40"
    return (
        <div className="flex gap-10 md:gap-10 w-auto ">
            <div className="flex md:flex-col gap-10 md:gap-30 w-50">
                <div className={imageSize}>
                    <img src={imagem1} className={imageStyle}/>
                </div>
                
                <div className={imageSize}>
                    <img src={imagem3} className={imageStyle}/>
                </div>
            </div>
            <div className="flex ">
                <div className={imageSize}>
                    <img src={imagem2} className={imageStyle}/>
                </div>
            </div>
        </div>
    )
}