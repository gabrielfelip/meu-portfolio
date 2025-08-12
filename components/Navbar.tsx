// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'; // Importar useRouter

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Inicializar useRouter

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Função para verificar se o link está ativo
  const isActive = (pathname: string) => {
    if (pathname === '/') { // Caso especial para a Home
      return router.pathname === pathname;
    }
    return router.pathname.startsWith(pathname); // Para outras páginas (ex: /projetos)
  };

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre Mim", href: "/sobre" },
    { name: "Projetos", href: "/projetos" },
    { name: "Tecnologias", href: "/tecnologias" },
    { name: "Certificados", href: "/certificados" },
  ];

  return (
    <nav className="bg-dark-lighter shadow-md py-4 sticky top-0 z-50 text-text-light">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-accent hover:text-accent-dark transition-colors">
          Meu Portfólio
        </Link>

        {/* Botão Hambúrguer para Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-light hover:text-accent focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Links de Navegação (Desktop) */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href) ? "text-accent border-b-2 border-accent pb-1" : "text-text-light hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-dark-lighter shadow-lg py-4 border-t border-dark">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block font-medium py-2 ${
                    isActive(link.href) ? "text-accent" : "text-text-light hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}