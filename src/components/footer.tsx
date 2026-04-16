import whatsappIcon from "../assets/icons/whatsapp.png"
import instagramIcon from "../assets/icons/instagram.png"
import { Link } from "react-router-dom";
type ContatoPros = {
    numero: string;
    instagram: string;
}
export function Footer({numero,instagram}:ContatoPros){
    const linkwhatsapp: string = `https://wa.me/${numero}?`;
    return(
        <footer className="bg-[#6B502E] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Sobre */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sobre</h2>
          <p className="text-sm text-gray-300">
            Atendimento profissional focado no seu bem-estar, com técnicas de
            massagem relaxante e terapêutica.
          </p>
        </div>

        {/* Serviços */}
        <div>
        <Link to={"/serviços"}><h2 className="text-xl font-semibold mb-4">Serviços</h2></Link>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Massagem Relaxante</li>
            <li>Massagem Terapêutica</li>
            <li>Liberação Miofascial</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contato</h2>
          <div className="flex gap-4 mt-4">
            <a
              href={linkwhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-2 rounded-xl text-sm transition"
            >
                <img className="w-8 h-8" src={whatsappIcon} alt="whatsapp" />
            </a>
            
            <a
              href= {instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-2 rounded-xl text-sm transition"
            >
                <img className="w-8 h-8" src={instagramIcon} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
      {/* Rodapé inferior */}
      <div className="border-t border-white-700 mt-10 pt-4 text-center text-sm text-white-400">
        © {new Date().getFullYear()} Wanderson Ferreira Massoterapeuta. Todos os direitos reservados.
        <p>
            Ícones por{" "}
            <a
            href="https://www.flaticon.com/br/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
            >
            Freepik - Flaticon
            </a>
        </p>
      </div>
    </footer>
    )
}