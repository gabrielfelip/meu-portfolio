import { Github, Linkedin } from 'lucide-react'; //


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Coluna 1: Informações do Portfólio */}
          <div>
            <h3 className="text-xl font-heading text-accent mb-4 text-blue-400">Gabriel Portfólio</h3>
            <p className="text-gray-300">Desenvolvedor de soluções que transforma ideias em realidade digital.</p>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h3 className="text-xl font-heading text-accent mb-4 text-blue-400">Contato</h3>
            <ul className="space-y-2 text-text-300">
              <li>Email: <a href="mailto:gabriel_felype@hotmail.com" className="hover:text-blue-300 transition-colors">gabriel_felype@hotmail.com</a></li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais (com ícones) */}
          <div>
            <h3 className="text-xl font-heading text-accent mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {/* Link do LinkedIn com ícone */}
              <a
                href="https://www.linkedin.com/in/gabriel-silva--cs/" // Lembre-se de colocar seu link real!
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-text-light hover:text-accent transition-colors group" // Classes para estilo e hover
                aria-label="Meu perfil no LinkedIn" // Importante para acessibilidade
              >
                <Linkedin className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> {/* Ícone Linkedin */}
                <span className="text-lg">LinkedIn</span>
              </a>
              {/* Link do GitHub com ícone */}
              <a
                href="https://github.com/gabrielfelip" // Lembre-se de colocar seu link real!
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-text-light hover:text-accent transition-colors group"
                aria-label="Meu perfil no GitHub" // Importante para acessibilidade
              >
                <Github className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> {/* Ícone Github */}
                <span className="text-lg">GitHub</span>
              </a>         
            </div>
          </div>
        </div>

        {/* Seção de Direitos Autorais */}
        <div className="pt-8 border-t border-dark text-center text-text-muted text-sm"> {/* Borda e texto mutado */}
          <p>© {currentYear} Gabriel Portfólio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}