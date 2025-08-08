// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const TypeAnimation = dynamic(
  () =>
    import('react-type-animation').then(
      (mod) => mod.TypeAnimation as React.ComponentType<React.ComponentProps<typeof mod.TypeAnimation>>
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


  return (
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40" style={{ backgroundAttachment: 'fixed' }}></div>

      <div className="relative z-10">
        <Head>
          <title>Gabriel | Portfólio - Desenvolvedor</title>
          <meta name="description" content="Portfólio de Gabriel, um desenvolvedor de soluções apaixonado por tecnologia." />
        </Head>

        <Navbar />

        <main className="container mx-auto px-6 py-12">
          {/* Seção Hero */}
          <section id="inicio" className="flex flex-col md:flex-row items-center gap-12 mb-20 text-center md:text-left min-h-[calc(100vh-80px)] justify-center">
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
                    'Estudante de Análise e Desenvolvimento de Sistemas.', 1500,
                    'Apaixonado por Tecnologia e Inovação.', 1500,
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
                <a href="#projetos" className="bg-accent text-dark px-7 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 font-medium">
                  Ver Projetos
                </a>
                <a href="https://linkedin.com/in/gabriel-silva--cs" target="_blank" rel="noopener noreferrer" className="border border-accent text-accent px-7 py-3 rounded-lg shadow-md hover:bg-accent-dark hover:text-dark transition-all duration-300 transform hover:scale-105 font-medium">
                  LinkedIn
                </a>
                <a href="/Gabriel_Curriculo.pdf" download className="border border-text-muted text-text-muted px-7 py-3 rounded-lg shadow-md hover:bg-text-muted hover:text-dark transition-all duration-300 transform hover:scale-105 font-medium">
                  Baixar Currículo
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

          {/* NOVA SEÇÃO: Habilidades em Destaque (Habilidades na Home) */}
          <section className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-text-light mb-12">Habilidades em Destaque</h2> {/* Novo Título */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6"> {/* Grade simples, sem categorias */}
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
                  <p className="font-medium text-text-light text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
            {/* Botão "Ver todas as tecnologias" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: featuredSkills.length * 0.1 + 0.2, duration: 0.6 }} // Atraso para aparecer depois dos cards
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