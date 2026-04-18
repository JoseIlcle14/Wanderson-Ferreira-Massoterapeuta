
type  ServicoProps = {
    urlImage : string;
    descricao : string;
    titulo : string;
};

export function Servico({urlImage,descricao, titulo}: ServicoProps){
    return(
        <div className="flex h-full w-full md:h-40 md:w-140 mt-10 ml-1 md:ml-10">
            <img src={urlImage} className="h-20 w-20 md:h-40 md:w-40 rounded-2xl shadow-2xl shadow-black/50"/>
            <div className="pl-2 ">
                <div className="text-xl md:text-2xl pb-1 font-serif font-bold text-[#6B502E]">
                    <h1>{titulo}</h1>
                </div>
                <div className="text-[#372E22] text-[10px] md:text-[15px] font-sans mr-1">
                    <p>{descricao}</p>    
                </div>
            </div> 
        </div>
    )
}