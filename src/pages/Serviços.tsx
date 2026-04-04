import {Navbar} from "../components/navbar";
import {Servico} from "../components/serviço";
import img1 from "../assets/imagens/massagem-relaxante.webp";
import img2 from "../assets/imagens/massagem-terapeutica.webp";
import img3 from "../assets/imagens/pedras-quentes.webp";
import img4 from "../assets/imagens/epicraniana.webp";
import img5 from "../assets/imagens/quick-massage.webp";
import img6 from "../assets/imagens/ventosoterapia.webp";

export function Serviços(){
    return(
        <body className="bg-[#DECCB4]">
        <Navbar/>
        <div className=" flex justify-center">
            <div className="">
                <ul>
                    <li>
                        <Servico
                        urlImage={img1}
                        titulo="Massagem Relaxante"
                        descricao="Técnica com movimentos suaves para aliviar o estresse, combater a ansiedade, a insônia e as dores de cabeça, promovendo bem-estar e tranquilidade."
                        />
                    </li>
                    <li>
                        <Servico
                        urlImage={img2}
                        titulo="Massagem Terapêutica"
                        descricao="Focada em tratar dores e disfunções específicas, liberando pontos de tensão e realinhando a musculatura para alívio de dores crônicas e lesões."
                        />
                    </li>
                    <li>
                        <Servico
                        urlImage={img3}
                        titulo="Massagem com Pedras Quentes"
                        descricao="Terapia com pedras vulcânicas aquecidas para aliviar tensões, melhorar a circulação e equilibrar as energias, ideal para relaxamento e dores crônicas"
                        />
                    </li>
                </ul>
            </div>
            <div className="">
                <ul>
                    <li>
                        <Servico
                        urlImage={img4}
                        titulo="Massagem Epicraniana"
                        descricao="Uma técnica terapêutica que se concentra no couro cabeludo, rosto e pescoço, utilizando movimentos suaves e pressões leves para estimular os tecidos e músculos da região"
                        />
                    </li>
                    <li>
                        <Servico
                        urlImage={img5}
                        titulo="Quick Massage"
                        descricao="Uso de óleos essenciais puros para equilibrar a saúde física e emocional, auxiliando no tratamento de estresse, ansiedade e insônia"
                        />
                    </li>
                    <li>
                        <Servico
                        urlImage={img6}
                        titulo="Ventosaterapia"
                        descricao="Técnica com ventosas para melhorar a circulação, aliviar dores musculares e articulares, liberar toxinas e fortalecer o sistema imunológico"
                        />
                    </li>
                </ul>
            </div>
        </div>
        </body>
    )
}