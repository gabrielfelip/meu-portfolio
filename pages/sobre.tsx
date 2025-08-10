// pages/sobre.tsx
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const interests = [
    { name: "Desenvolvimento Web", icon: "/images/web.gif", description: "Construo aplicações web completas, do front-end ao back-end, utilizando as tecnologias mais recentes para criar experiências digitais intuitivas e eficazes." },
    { name: "Automações", icon: "/images/robo.gif", description: "Apaixonado por otimizar processos e tornar tarefas repetitivas mais eficientes através da criação de scripts e ferramentas de automação com Python." },
    { name: "Inovação e Tecnologia", icon: "/images/foguete.gif", description: "Sempre buscando aplicar novas tecnologias, como inteligência artificial, para desenvolver soluções que resolvam problemas complexos, especialmente na área de saúde mental." },
  ];

  return (
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40" style={{ backgroundAttachment: 'fixed' }}></div>

      <div className="relative z-10">
        <Head>
          <title>Gabriel | Sobre Mim - Desenvolvedor</title>
          <meta name="description" content="Saiba mais sobre Gabriel, desenvolvedor de soluções e estudante de Análise e Desenvolvimento de Sistemas." />
        </Head>

        <Navbar />

        <main className="container mx-auto px-6 py-12">
          {/* Seção de Título */}
          <motion.section
            className="mb-16 text-center"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h1 className="text-4xl md:text-5xl font-heading text-text-light font-bold leading-tight">Sobre Mim</h1>
            <p className="text-xl text-text-muted mt-4">Conheça um pouco mais sobre minha jornada e paixões.</p>
          </motion.section>

          {/* Seção Principal - Quem Sou Eu e Formação */}
          <motion.section
            className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16 bg-dark-lighter p-8 rounded-xl shadow-lg border border-dark"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={sectionVariants}
            transition={{ ...sectionVariants.visible.transition, delay: 0.2 }}
          >
            <div className="md:w-1/3 flex justify-center flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-md">
                <Image
                  src="/images/perfil.jpeg"
                  alt="Foto de perfil do Gabriel"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3 text-text-light text-center md:text-left">
              <h2 className="text-3xl font-heading text-text-light mb-4">Minha Jornada</h2>
              <p className="mb-4 leading-relaxed text-text-muted">
                Sou estudante de Análise e Desenvolvimento de Sistemas com um forte interesse em transformar ideias em soluções digitais. Minha jornada começou com a paixão por tecnologia e a busca por aprender e aplicar conhecimentos em projetos práticos.
              </p>
              <p className="mb-4 leading-relaxed text-text-muted">
                Atualmente, estou focado em aprofundar minhas habilidades em desenvolvimento web, criando aplicações robustas e intuitivas. Além disso, exploro o poder da automação com Python e o potencial da inteligência artificial para construir soluções inovadoras.
              </p>
              <p className="leading-relaxed text-text-muted">
                Estou em busca de uma oportunidade de estágio onde possa aplicar meu conhecimento, contribuir para projetos significativos e crescer profissionalmente em um ambiente colaborativo.
              </p>
              <h3 className="text-2xl font-heading text-text-light mt-6 mb-3">Formação Acadêmica</h3>
              <p className="text-text-muted">
                <strong>Análise e Desenvolvimento de Sistemas</strong><br />
                Fatec - SJC | 2023 - 2025 (cursando)
              </p>
            </div>
          </motion.section>

          {/* Nova Seção de Paixões e Interesses */}
          <motion.section
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={sectionVariants}
            transition={{ ...sectionVariants.visible.transition, delay: 0.4 }}
          >
            <h2 className="text-3xl font-heading text-text-light mb-8">Paixões e Interesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {interests.map((interest, i) => (
                <motion.div
                  key={i}
                  className="bg-dark-lighter p-8 rounded-xl shadow-lg border border-dark flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={sectionVariants}
                  transition={{ ...sectionVariants.visible.transition, delay: 0.5 + i * 0.2 }}
                >
                  <Image
                    src={interest.icon}
                    alt={interest.name}
                    width={124}
                    height={104}
                    className="mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-accent mb-2">{interest.name}</h3>
                  <p className="text-text-muted leading-relaxed">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </div>
  );
}