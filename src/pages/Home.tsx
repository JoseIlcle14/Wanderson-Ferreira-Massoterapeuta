import { ConjuntoImagem } from "../components/conjuntoImagens"
import { Footer } from "../components/footer"
import { Localizacao } from "../components/localização"
import {Navbar} from "../components/navbar"
import { Profissional } from "../components/profissional"
import { WhatzAppButton } from "../components/whatsapp"
export function Home(){
   
    return(
        <div className="bg-[#DECCB4] overflow-x-hidden">
        <Navbar/>
        <div className="px-4 md:pl-10 flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                    <div className="pt-10 pb-10 gap-3 flex flex-col">
                        <div className="tex-xl md:text-4xl max-w-50 md:max-w-[320px] w-full font-serif text-[#6B502E]">
                            <h1>Wanderson Ferreira <span className="font-bold">MASSOTERAPEUTA</span></h1>
                        </div>
                        <div className="text-[11px] md:text-[15px] text-[#4E2525]">
                            <h2>Seu corpo fala.<br/> O cansaço, o estresse, as dores e as tensões são sinais de que ele pede atenção.</h2>
                        </div>
                    </div>
                    <div>
                        <WhatzAppButton
                        numero="5585986289481"/>
                    </div>
                </div>
                <div className="flex pr-4 md:pr-10 pt-5">
                    <ConjuntoImagem/>
                </div>
            </div>
            <div>
                <Profissional/>
            </div>
            <div className="text-xl md:text-4xl text-[#6B502E] font-bold font-serif">
                <h1>LOCALIZAÇÃO</h1>
            </div>
            <div>
                <Localizacao
                titulo="Clinica Fisio Bessa"
                local="Rua Otávio Felício De Souza - 2815
                 Bessalandia,Cascavel-CE"
                horario="Segunda a quinta-feira
                 18h às 20h"
                 link="https://www.google.com/maps/place/Fisio+Bessa/@-4.1274099,-38.2436615,17z/data=!3m1!4b1!4m6!3m5!1s0x7b897acd5bd982f:0xd1572f00215137d9!8m2!3d-4.1274153!4d-38.2410866!16s%2Fg%2F11lgy_y8jy?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"/>
            </div>
            <div>
                <Localizacao
                titulo="Clinica Ciene Neri"
                local="Rua José Augustinho - 1658
                Mutirão, Cascavel-CE"
                horario="Sábados à tarde
                13h às 16h"
                 link="https://www.google.com/maps/place/Clinica+Ciene+Neri/@-4.1388893,-38.2505719,18z/data=!4m6!3m5!1s0x7b89763c6cd421b:0x1cec1f8e4523e86f!8m2!3d-4.138892!4d-38.2492844!16s%2Fg%2F11lyj3tsx0?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"/>
            </div>
        </div>
        <Footer
        numero="5585986289481"
        instagram="https://www.instagram.com/masso.wandersonferreira/"/>
        </div>
    )
}