// pages/projetos.tsx
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

// 1. Interface para tipo Projeto
interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  context: string;
  technologies: string[];
  category: string;
  image: string;
  link: string;
}

// Dados dos Projetos
const allProjects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão de Projetos de P&D",
    description:
      "Sistema web intuitivo para gerenciamento de projetos de pesquisa e desenvolvimento tecnológico, com dashboard, filtros e interface conversacional baseada em IA.",
    fullDescription: `
Este é um projeto acadêmico desenvolvido em grupo na faculdade, focado na criação de um sistema web intuitivo para gestão de projetos de pesquisa e desenvolvimento tecnológico da Fundação FAPG. O objetivo principal é simplificar e otimizar o acompanhamento dos projetos, garantindo eficiência e transparência para todos os envolvidos.

O sistema foi construído com base na metodologia ágil SCRUM, estimulando a proatividade, autonomia e colaboração da equipe. O projeto foi organizado em sprints, entregando funcionalidades incrementais como cadastro e edição de projetos, filtros e dashboards de acompanhamento, gestão de atividades e, por fim, uma interface conversacional baseada em inteligência artificial.

**Entre as principais funcionalidades destacam-se:**

- Cadastro, listagem, edição e exclusão de projetos.
- Filtros por área, responsáveis e status.
- Dashboard com gráficos para monitoramento do progresso.
- Adição, edição e exclusão de atividades vinculadas aos projetos.
- Interface conversacional inteligente para facilitar operações via comandos naturais.

**As tecnologias utilizadas incluem** Next.js, React, TypeScript, Node.js, Prisma, MySQL, Tailwind CSS e recursos de IA para a interface conversacional.

Este projeto proporcionou um aprendizado valioso sobre desenvolvimento fullstack, metodologias ágeis e integração de IA, além de permitir a aplicação prática dos conceitos de gestão de projetos e trabalho em equipe.

Status atual: projeto concluído, entregue e apresentado oficialmente para a Fundação FAPG.
    `,
    context: "Projeto Acadêmico",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "MySQL",
      "Tailwind",
      "IA",
    ],
    category: "FullStack",
    image: "/gifs/quantum.gif",
    link: "https://github.com/CODEPLAY-Fatec/API-ADS-4-Sem-Fatec",
  },
  {
    id: 2,
    title: "Sistema de Gerenciamento de RH",
    description:
      "Aplicação fullstack desenvolvida com Node.js, Express, React e PostgreSQL, incluindo autenticação, CRUD de funcionários, controle de permissões e dashboard intuitivo.",
    fullDescription: `
Este foi um projeto pessoal para aprimorar minhas habilidades fullstack. O objetivo era criar um sistema robusto de gerenciamento de recursos humanos com autenticação JWT e controle de permissões. O maior aprendizado foi na implementação de segurança (bcrypt) e na modelagem de dados com Prisma e PostgreSQL.
    `,
    context: "Projeto Pessoal",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "JWT",
      "bcrypt",
      "Vite",
    ],
    category: "FullStack",
    image: "/gifs/hr-system.gif",
    link: "https://github.com/gabrielfelip/hr-system",
  },
  {
    id: 3,
    title: "Scraper de Notebooks - Magazine Luiza (T2C)",
    description:
      "Script automatizado que coleta dados de notebooks no site da Magazine Luiza, filtra por avaliações e gera um relatório em Excel com envio por e-mail.",
    fullDescription: `
Este projeto foi desenvolvido para um desafio técnico e me permitiu aprofundar em automação web com Python. O aprendizado principal foi a manipulação de dados com Pandas e a integração com serviços de e-mail (SMTP) e arquivos Excel (OpenPyXL).
    `,
    context: "Projeto Pessoal",
    technologies: ["Python", "Selenium", "Pandas", "OpenPyXL", "SMTP"],
    category: "Automação & Web Scraping",
    image: "/gifs/T2C.gif",
    link: "https://github.com/gabrielfelip/testeT2c#",
  },
  {
    id: 4,
    title: "Gerador de Resumos Inteligente de PDF e Vídeos com IA",
    description:
      "Aplicação com interface em Streamlit para gerar resumos automáticos de PDFs e vídeos do YouTube usando modelos locais como Mistral via Ollama.",
    fullDescription: `
A ideia para este projeto surgiu da necessidade de processar informações de forma mais rápida. Usei IA local para resumir textos e vídeos, o que me proporcionou um grande aprendizado sobre processamento de linguagem natural (NLP) e a integração de modelos de IA em aplicações web.
    `,
    context: "Projeto Pessoal",
    technologies: [
      "Python",
      "Streamlit",
      "Ollama",
      "Mistral",
      "LangChain",
      "PyPDF2",
      "YouTube Transcript API",
    ],
    category: "IA & Automação",
    image: "/gifs/resumo-ia.gif",
    link: "https://github.com/gabrielfelip/Resumos-IA",
  },
  {
    id: 5,
    title: "Simulador de Pagamento - SPA",
    description:
      "Aplicação web de página única que simula parcelamentos, taxas e descontos em tempo real. Desenvolvida com HTML, CSS e JavaScript puro como atividade da disciplina Eletiva de Programação Web.",
    fullDescription: `
Este foi um dos meus primeiros projetos web na faculdade. O objetivo era consolidar conceitos de HTML, CSS e JavaScript, focando na manipulação do DOM e na lógica de cálculos financeiros. Foi essencial para construir uma base sólida em desenvolvimento frontend.
    `,
    context: "Projeto Acadêmico",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    image: "/gifs/sistemadevendas.gif",
    link: "https://github.com/gabrielfelip/Sistema-de-Vendas",
  },
  {
    id: 6,
    title: "Calculadora Matemática",
    description:
      "Calculadora web com operações básicas e avançadas como Bhaskara, múltiplos e potências. Projeto desenvolvido em HTML, CSS e JavaScript durante a disciplina Eletiva de Programação Web.",
    fullDescription: `
Outro projeto acadêmico importante para a prática de lógica de programação. O foco foi implementar funções matemáticas complexas e garantir uma interface de usuário responsiva. Este projeto reforçou meu entendimento sobre o funcionamento de interfaces e interações do usuário.
    `,
    context: "Projeto Acadêmico",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    image: "/gifs/calculadora.gif",
    link: "https://github.com/gabrielfelip/MathMaster",
  },
];

// Animações para cards e modal
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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Componentes customizados para ReactMarkdown
const markdownComponents = {
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-6 leading-relaxed text-text-muted">{children}</p>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold text-accent">{children}</strong>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-6 text-text-muted">{children}</ul>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1">{children}</li>
  ),
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "Todos",
    ...Array.from(new Set(allProjects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40"
        style={{ backgroundAttachment: "fixed" }}
      ></div>

      <div className="relative z-10">
        <Head>
          <title>Gabriel | Projetos - Desenvolvedor</title>
          <meta
            name="description"
            content="Explore os projetos desenvolvidos por Gabriel."
          />
        </Head>

        <Navbar />

        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <motion.section
            className="mb-16 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-heading text-text-light font-bold leading-tight">
              Meus Projetos
            </h1>
            <p className="text-xl text-text-muted mt-4">
              Uma seleção dos meus trabalhos e paixões.
            </p>
          </motion.section>

          {/* Filter buttons */}
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
                  className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
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

          {/* Projects grid */}
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
                    <h3 className="text-3xl font-heading text-accent mb-4">
                      {project.title}
                    </h3>
                    <p className="text-text-muted mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-dark text-text-muted text-sm px-3 py-1 rounded-full border border-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-grow bg-accent text-dark px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-colors duration-300 transform hover:scale-105 text-center font-medium"
                      >
                        Detalhes
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow bg-accent text-dark px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-colors duration-300 transform hover:scale-105 text-center font-medium"
                      >
                        Ver no GitHub
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>
        </main>

        <Footer />
      </div>

      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50"
          style={{
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)} // Fecha clicando fora
        >
          {/* Conteúdo do Modal */}
          <div
            className="bg-dark-lighter rounded-xl max-w-4xl w-full p-8 border-2 border-accent 
                 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro
          >
            <h2 className="text-3xl font-heading text-text-light mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-text-muted italic mb-6">
              {selectedProject.context}
            </p>

            <div className="text-text-muted mb-8 leading-relaxed">
              <ReactMarkdown>{selectedProject.fullDescription}</ReactMarkdown>
            </div>

            <h3 className="text-xl font-heading font-semibold text-text-light mb-2">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-dark text-text-muted text-sm px-3 py-1 rounded-full border border-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-dark px-6 py-3 rounded-lg shadow-md 
                   hover:bg-accent-dark transition-colors duration-300 transform 
                   hover:scale-105 text-center font-medium w-full"
            >
              Ver no GitHub
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
