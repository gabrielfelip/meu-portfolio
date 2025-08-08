// pages/sobre.tsx
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  // Variantes de animação para as seções - AGORA USARÃO initial="hidden" e whileInView="visible"
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

  return (
    // Div principal com o fundo e padrão aplicados (MANUALMENTE)
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      {/* Camada para a imagem de fundo */}
      <div className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40" style={{ backgroundAttachment: 'fixed' }}></div>

      {/* Conteúdo principal da página */}
      <div className="relative z-10">
        <Head>
          <title>Gabriel | Sobre Mim - Desenvolvedor</title>
          <meta name="description" content="Saiba mais sobre Gabriel, desenvolvedor de soluções e estudante de Análise e Desenvolvimento de Sistemas." />
        </Head>

        <Navbar />

        <main className="container mx-auto px-6 py-12">
          {/* Seção Título "Sobre Mim" - Animada */}
          <motion.section
            className="mb-16 text-center"
            initial="hidden"
            animate="visible" // Mantido animate para o título da página aparecer ao carregar
            variants={sectionVariants}
          >
            <h1 className="text-4xl md:text-5xl font-heading text-text-light font-bold leading-tight">Sobre Mim</h1>
            <p className="text-xl text-text-muted mt-4">Conheça um pouco mais sobre minha jornada e paixões.</p>
          </motion.section>

          {/* Seção Foto e Quem Sou Eu - Animada ao Scroll */}
          <motion.section
            className="flex flex-col md:flex-row items-center md:items-center gap-12 mb-16 bg-dark-lighter p-8 rounded-xl shadow-lg border border-dark" // MUDANÇA AQUI: md:items-center
            initial="hidden"
            whileInView="visible" // MUDANÇA AQUI: animar ao scroll
            viewport={{ once: true, amount: 0.4 }} // Dispara a animação quando 40% da seção está visível
            variants={sectionVariants}
            transition={{ ...sectionVariants.visible.transition, delay: 0.2 }}
          >
            <div className="md:w-1/3 flex justify-center">
    {/* MUDANÇAS AQUI: w-64 h-64 para telas pequenas e removido width/height do Image, adicionado fill */}
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-md flex items-center justify-center">
      <Image
        src="/images/perfil.jpeg"
        alt="Foto de perfil do Gabriel"
        fill // MUDANÇA AQUI: Usar 'fill'
        className="object-cover rounded-full"
        priority
      />
    </div>
            </div>
            <div className="md:w-2/3 text-text-light">
              <h2 className="text-3xl font-heading text-text-light mb-4">Quem sou eu</h2>
              <p className="mb-4 leading-relaxed text-text-muted">
                Sou estudante de Análise e Desenvolvimento de Sistemas com grande interesse em desenvolvimento web, automações com Python e soluções voltadas à saúde mental e tecnologias. Tenho buscado evoluir constantemente através de bootcamps, projetos pessoais e cursos práticos.
              </p>
              <p className="leading-relaxed text-text-muted">
                Estou em busca de uma oportunidade de estágio para aplicar meus conhecimentos e crescer profissionalmente.
              </p>
              <h3 className="text-2xl font-heading text-text-light mt-6 mb-3">Formação Acadêmica</h3> {/* MUDANÇA AQUI: Adicionado border-b para separar */}
              <p className="mb-2 text-text-muted">
                <strong>Análise e Desenvolvimento de Sistemas</strong><br />
                [Nome da Instituição] - 2023 - 2025 (cursando)
              </p>
            </div>
          </motion.section>

          {/* Seção Experiência - Animada ao Scroll */}
          <motion.section
            className="mb-16 bg-dark-lighter p-8 rounded-xl shadow-lg border border-dark"
            initial="hidden"
            whileInView="visible" // MUDANÇA AQUI: animar ao scroll
            viewport={{ once: true, amount: 0.4 }}
            variants={sectionVariants}
            transition={{ ...sectionVariants.visible.transition, delay: 0.4 }}
          >
            <h2 className="text-3xl font-heading text-text-light mb-6 text-center">Experiência</h2>
            <div className="space-y-8">
              {/* Experiência 1 */}
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-2">Desenvolvedor Front-End | Projeto Catálogo de Produtos</h3> {/* MUDANÇA AQUI: font-semibold */}
                <p className="text-text-muted mb-2">Projeto Pessoal - 2024</p>
                <ul className="list-disc list-inside text-text-muted space-y-1">
                  <li>Desenvolvi uma aplicação web com HTML, CSS e JavaScript.</li>
                  <li>Implementei funcionalidades como busca, exclusão e armazenamento no localStorage.</li>
                  <li>Pratiquei lógica de programação, DOM e responsividade.</li>
                </ul>
              </div>
              {/* Experiência 2 */}
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-2">Web Scraping com Selenium | Python</h3> {/* MUDANÇA AQUI: font-semibold */}
                <p className="text-text-muted mb-2">Projeto Pessoal - 2024</p>
                <ul className="list-disc list-inside text-text-muted space-y-1">
                  <li>Coleta automática de dados de notebooks no site da Magazine Luiza.</li>
                  <li>Geração de relatório e envio automatizado por e-mail.</li>
                  <li>Uso de Selenium, Pandas e SMTP em Python.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Seção Certificados - Animada ao Scroll */}
          <motion.section
            className="mb-16 bg-dark-lighter p-8 rounded-xl shadow-lg border border-dark"
            initial="hidden"
            whileInView="visible" // MUDANÇA AQUI: animar ao scroll
            viewport={{ once: true, amount: 0.4 }}
            variants={sectionVariants}
            transition={{ ...sectionVariants.visible.transition, delay: 0.6 }}
          >
            <h2 className="text-3xl font-heading text-text-light mb-6 text-center">Certificados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Certificado 1 */}
              <motion.div // Aplicando motion para o card de certificado (já estava)
                className="bg-dark p-6 rounded-lg shadow-sm border border-dark-lighter transform hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer" // MUDANÇA AQUI: Efeito de hover
                variants={sectionVariants} // Pode usar aqui para animação individual se preferir, ou remover
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="text-xl font-medium text-text-light mb-2">Fundamentos de Suporte Técnico</h3>
                <p className="text-text-muted mb-3">Coursera - 2024</p>
                <a href="#" className="bg-accent text-dark px-3 py-1 rounded-md hover:bg-accent-dark transition-colors text-sm font-medium">Ver Credencial</a> {/* MUDANÇA AQUI: Estilo de botão */}
              </motion.div>
              {/* Certificado 2 */}
              <motion.div
                className="bg-dark p-6 rounded-lg shadow-sm border border-dark-lighter transform hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} // Pequeno atraso para cascata
              >
                <h3 className="text-xl font-medium text-text-light mb-2">Cybersecurity Essentials</h3>
                <p className="text-text-muted mb-3">Cisco Networking Academy - 2024</p>
                <a href="#" className="bg-accent text-dark px-3 py-1 rounded-md hover:bg-accent-dark transition-colors text-sm font-medium">Ver Credencial</a>
              </motion.div>
              {/* Certificado 3 */}
              <motion.div
                className="bg-dark p-6 rounded-lg shadow-sm border border-dark-lighter transform hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Pequeno atraso para cascata
              >
                <h3 className="text-xl font-medium text-text-light mb-2">Formação GitHub para Desenvolvedores</h3>
                <p className="text-text-muted mb-3">DIO - 2024</p>
                <a href="#" className="bg-accent text-dark px-3 py-1 rounded-md hover:bg-accent-dark transition-colors text-sm font-medium">Ver Credencial</a>
              </motion.div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div> {/* Fim do z-10 div */}
    </div> // Fim do div principal
  );
}