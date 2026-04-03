import { ConjuntoImagem } from "../components/conjuntoImagens"
import {Navbar} from "../components/navbar"
import { Profissional } from "../components/profissional"
import { WhatzAppButton } from "../components/whatsapp"
export function Home(){
    return(
        <body className="bg-[#DECCB4]">
        <Navbar/>
        <div className="pl-10">
            <div className="flex justify-between">
                <div>
                    <div className="pt-10 pb-10 gap-3 flex flex-col">
                        <div className="text-4xl w-80 font-serif text-[#6B502E]">
                            <h1>Wanderson Ferreira <span className="font-bold">MASSOTERAPEUTA</span></h1>
                        </div>
                        <div className="text-[#4E2525]">
                            <h2>Seu corpo fala.<br/> O cansaço, o estresse, as dores e as tensões são sinais de que ele pede atenção.</h2>
                        </div>
                    </div>
                    <div>
                        <WhatzAppButton/>
                    </div>
                </div>
                <div className="flex pr-15 pt-5">
                    <ConjuntoImagem/>
                </div>
            </div>
            <div>
                <Profissional/>
            </div>
        </div>
        </body>
    )
}