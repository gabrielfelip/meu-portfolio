// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TypeAnimation = dynamic(
  () =>
    import("react-type-animation").then(
      (mod) =>
        mod.TypeAnimation as React.ComponentType<
          React.ComponentProps<typeof mod.TypeAnimation>
        >
    ),
  {
    ssr: false,
    loading: () => (
      <span className="text-xl md:text-2xl text-text-muted h-full flex items-center justify-center md:justify-start">
        Carregando...
      </span>
    ),
  }
);

export default function Home() {
  const featuredSkills = [
    { name: "HTML", icon: "/skills/html5.svg" },
    { name: "CSS", icon: "/skills/css3.svg" },
    { name: "TypeScript", icon: "/skills/typescript.svg" },
    { name: "Node.js", icon: "/skills/nodejs.svg" },
    { name: "Git", icon: "/skills/git.svg" },
    { name: "Python", icon: "/skills/python.svg" },
  ];

  // Variantes de animação para a Seção Hero (mantidas)
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const heroItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const heroButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variantes de animação para os cards de Habilidade (mantidas)
  const skillCardVariants = {
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

  const projetos = [
    {
      title: "Sistema de Gerenciamento de RH",
      shortDesc:
        "Aplicação web para gerenciamento de Recursos Humanos com autenticação, CRUD e mais.",
      img: "/gifs/hr-system.gif",
      link: "https://github.com/gabrielfelip/hr-system",
      stack: ["TypeScript", "Node.js", "Express", "React", "PostgreSQL", "Prisma"],
    },
    {
      title: "Gerador de Resumos Inteligente de PDF e Vídeos com IA",
      shortDesc:
        "Aplicação web interativa que gera resumos automáticos de PDFs e vídeos usando IA local.",
      img: "/gifs/resumo-ia.gif",
      link: "https://github.com/gabrielfelip/Resumos-IA",
      stack: ["Python", "Streamlit", "Mistral", "Ollama"],
    },
    {
      title: "Sistema de Gestão de Projetos de P&D",
      shortDesc:
        "Aplicação web para gestão de projetos de pesquisa e desenvolvimento com colaboração.",
      img: "/gifs/quantum.gif",
      link: "https://github.com/CODEPLAY-Fatec/API-ADS-4-Sem-Fatec",
      stack: ["Next.js", "Node.js", "MySQL", "Prisma", "React", "TypeScript"],
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40"
        style={{ backgroundAttachment: "fixed" }}
      ></div>

      <div className="relative z-10">
        <Head>
          <title>Gabriel | Portfólio - Desenvolvedor</title>
          <meta
            name="description"
            content="Portfólio de Gabriel, um desenvolvedor de soluções apaixonado por tecnologia."
          />
        </Head>

        <Navbar />

        <main className="container mx-auto px-6 py-12">
          {/* Seção Hero */}
          <section
            id="inicio"
            className="flex flex-col md:flex-row items-center gap-12 mb-20 text-center md:text-left min-h-[calc(100vh-80px)] justify-center"
          >
            <motion.div
              className="md:w-1/2"
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-heading text-text-light mb-4 leading-tight"
                variants={heroItemVariants}
              >
                Olá, eu sou <span className="text-accent">Gabriel</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-text-muted mb-8 h-20 flex items-center justify-center md:justify-start"
                variants={heroItemVariants}
              >
                <TypeAnimation
                  sequence={[
                    "Estudante de Análise e Desenvolvimento de Sistemas.",
                    1500,
                    "Apaixonado por Tecnologia e Inovação.",
                    1500,
                  ]}
                  wrapper="span"
                  speed={60}
                  repeat={Infinity}
                  className="block md:inline"
                />
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-4"
                variants={heroButtonVariants}
                initial="hidden"
                animate="visible"
              >
                <a
                  href="#projetos"
                  className="bg-accent text-dark px-7 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Ver Projetos
                </a>
                <a
                  href="https://linkedin.com/in/gabriel-silva--cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-accent text-accent px-7 py-3 rounded-lg shadow-md hover:bg-accent-dark hover:text-dark transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  LinkedIn
                </a>

                {/* Botões de Download dos Currículos */}
                <a
                  href="/CV-ESTAGIO-PT.pdf"
                  download="Gabriel_Silva_CV_PT.pdf"
                  className="border border-text-muted text-text-muted px-7 py-3 rounded-lg shadow-md hover:bg-text-muted hover:text-dark transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Baixar Currículo (PT)
                </a>
                <a
                  href="/CV-ESTAGIO-EN.pdf"
                  download="Gabriel_Silva_CV_EN.pdf"
                  className="border border-text-muted text-text-muted px-7 py-3 rounded-lg shadow-md hover:bg-text-muted hover:text-dark transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Download Resume (EN)
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-accent shadow-2xl flex items-center justify-center -mt-8">
                <Image
                  src="/images/perfil.jpeg"
                  alt="Foto de perfil do Gabriel"
                  width={410}
                  height={400}
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </motion.div>
          </section>

          {/* Projetos em Destaque */}
          <section id="projetos" className="py-16 text-center">
            <h2 className="text-4xl md:text-4xl font-heading text-text-light mb-12">
              Projetos em Destaque
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {projetos.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  variants={skillCardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.2 }}
                  className="bg-dark-lighter rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
                >
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-text-light mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-text-muted mb-4">{proj.shortDesc}</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-text-light text-left mb-2">
                        Tecnologias:
                      </h4>
                      <ul className="flex flex-wrap gap-2 justify-center ">
                        {proj.stack.map((tech) => (
                          <li
                            key={tech}
                            className="bg-dark text-text-muted px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full bg-accent text-dark px-3 py-3 rounded-md  font-mediumhover:bg-accent-dark transition-colors duration-300 text-center font-bold"
                      >
                        Ver no Github
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Botão para ver todos os projetos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12"
            >
              <a
                href="/projetos"
                className="bg-accent text-dark px-8 py-4 rounded-lg shadow-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 font-bold text-lg"
              >
                Ver Todos os Projetos
              </a>
            </motion.div>
          </section>

          {/* Seção de Habilidades */}
          <section className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-text-light mb-12">
              Habilidades em Destaque
            </h2>{" "}
            {/* Novo Título */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {" "}
              {/* Grade simples, sem categorias */}
              {featuredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillCardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-dark-lighter p-4 rounded-lg shadow-sm flex flex-col items-center justify-center
                                hover:bg-accent-dark transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-medium text-text-light text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* Botão "Ver todas as tecnologias" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: featuredSkills.length * 0.1 + 0.2,
                duration: 0.6,
              }} // Atraso para aparecer depois dos cards
              className="mt-12"
            >
              <a
                href="/tecnologias" // Link para a página de tecnologias
                className="bg-accent text-dark px-8 py-4 rounded-lg shadow-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 font-medium text-lg"
              >
                Ver Todas as Tecnologias
              </a>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}