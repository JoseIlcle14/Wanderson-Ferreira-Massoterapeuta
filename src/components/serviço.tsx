
type  ServicoProps = {
    urlImage : string;
    descricao : string;
    titulo : string;
};

export function Servico({urlImage,descricao, titulo}: ServicoProps){
    return(
        <div className="flex h-40 w-140 mt-10 ml-10">
            <img src={urlImage} className="h-40 w-40 rounded-2xl shadow-2xl shadow-black/50"/>
            <div className="pl-2">
                <div className="text-2xl pb-2 font-serif font-bold text-[#6B502E]">
                    <h1>{titulo}</h1>
                </div>
                <div className="text-[#372E22] font-sans ">
                    <p>{descricao}</p>    
                </div>
            </div>
            
        </div>
    )
}