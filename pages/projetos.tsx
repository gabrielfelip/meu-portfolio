// pages/projetos.tsx
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Dados de Exemplo de Projetos
// Substitua estes dados pelos seus próprios projetos!
const allProjects = [
  {
    id: 1,
    title: "Sistema de Gestão de Projetos de P&D",
    description: "Sistema web intuitivo para gerenciamento de projetos de pesquisa e desenvolvimento tecnológico, com dashboard, filtros e interface conversacional baseada em IA.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "MySQL", "Tailwind", "IA"],
    category: "FullStack",
    image: "/gifs/quantum.gif", // Exemplo de imagem, crie esta imagem em public/projetos/
    link: "https://github.com/CODEPLAY-Fatec/API-ADS-4-Sem-Fatec", // Link para o projeto ou GitHub/Demo
  },
  {
    id: 2,
    title: "Sistema de Gerenciamento de RH",
    description: "Aplicação fullstack desenvolvida com Node.js, Express, React e PostgreSQL, incluindo autenticação, CRUD de funcionários, controle de permissões e dashboard intuitivo..",
    technologies: ["Node.js", "Express", "React", "PostgreSQL", "Prisma", "TypeScript", "JWT", "bcrypt", "Vite"],
    category: "Fullstack",
    image: "/gifs/hr-system.gif", // Exemplo de imagem
    link: "https://github.com/gabrielfelip/hr-system",
  },
  {
    id: 3,
    title: "Scraper de Notebooks - Magazine Luiza (T2C)",
    description: "Script automatizado que coleta dados de notebooks no site da Magazine Luiza, filtra por avaliações e gera um relatório em Excel com envio por e-mail.",
    technologies: ["Python", "Selenium", "Pandas", "OpenPyXL", "SMTP"],
    category: "Automação & Web Scraping",
    image: "/gifs/T2C.gif", // Exemplo de imagem
    link: "https://github.com/gabrielfelip/testeT2c#",
  },
  {
    id: 4,
    title: "Gerador de Resumos com IA (PDFs & YouTube)",
    description: "Aplicação com interface em Streamlit para gerar resumos automáticos de PDFs e vídeos do YouTube usando modelos locais como Mistral via Ollama.",
    technologies: ["Python", "Streamlit", "Ollama", "Mistral", "LangChain", "PyPDF2", "YouTube Transcript API"],
    category: "IA & Automação",
    image: "/gifs/resumo-ia.gif", // Exemplo de imagem
    link: "https://github.com/gabrielfelip/Resumos-IA",
  },
  {
    id: 5,
    title: "Simulador de Pagamento - SPA",
    description: "Aplicação web de página única que simula parcelamentos, taxas e descontos em tempo real. Desenvolvida com HTML, CSS e JavaScript puro como atividade da disciplina Eletiva de Programação Web.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    image: "/gifs/sistemadevendas.gif", // Exemplo de imagem
    link: "https://github.com/gabrielfelip/Sistema-de-Vendas",
  },
  {
  id: 6,
  title: "Calculadora Matemática",
  description: "Calculadora web com operações básicas e avançadas como Bhaskara, múltiplos e potências. Projeto desenvolvido em HTML, CSS e JavaScript durante a disciplina Eletiva de Programação Web.",
  technologies: ["HTML5", "CSS3", "JavaScript"],
  category: "Frontend",
  image: "/gifs/calculadora.gif", // Certifique-se de ter o GIF no caminho correto
  link: "https://github.com/gabrielfelip/MathMaster" // Substitua pelo link real do repositório
},

];

// Variantes de animação para os cards de projeto
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...new Set(allProjects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    // Div principal com o fundo e padrão aplicados AQUI
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      {/* Camada para a imagem de fundo que não se move com o scroll */}
      {/* Usando o caminho public/images/darkness.png e opacidade de 40% */}
      <div className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40" style={{ backgroundAttachment: 'fixed' }}></div>

      {/* Conteúdo principal da página sobre a camada de fundo */}
      <div className="relative z-10">
        <Head>
          <title>Gabriel | Projetos - Desenvolvedor</title>
          <meta name="description" content="Explore os projetos desenvolvidos por Gabriel." />
        </Head>

        <Navbar />

        <main className="container mx-auto px-6 py-12">
          {/* Seção Título "Meus Projetos" */}
          <motion.section
            className="mb-16 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-heading text-text-light font-bold leading-tight">Meus Projetos</h1>
            <p className="text-xl text-text-muted mt-4">Uma seleção dos meus trabalhos e paixões.</p>
          </motion.section>

          {/* Seção de Filtros */}
          <motion.section
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200
                    ${
                      selectedCategory === category
                        ? "bg-accent text-dark shadow-md"
                        : "bg-dark-lighter text-text-light hover:bg-accent-dark"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.section>

          {/* Grid de Projetos */}
          <section>
            {filteredProjects.length === 0 ? (
              <motion.p
                key="no-projects"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-text-muted text-lg mt-8"
              >
                Nenhum projeto encontrado para esta categoria.
              </motion.p>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-dark-lighter p-6 rounded-xl shadow-lg border border-dark flex flex-col h-full"
                  >
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 border border-dark-lighter">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="text-2xl font-heading text-accent mb-2">{project.title}</h3>
                    <p className="text-text-muted mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-dark text-text-muted text-sm px-3 py-1 rounded-full border border-text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto bg-accent text-dark px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-colors duration-300 transform hover:scale-105 text-center font-medium"
                    >
                      Saiba Mais
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>
        </main>

        <Footer />
      </div> {/* Fim do z-10 div */}
    </div> // Fim do div principal
  );
}