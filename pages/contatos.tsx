// pages/contatos.tsx
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do formulário enviados:', formData);
    alert('Mensagem enviada com sucesso! (Funcionalidade de envio real ainda não implementada)');
    setFormData({ name: '', email: '', message: '' });
  };

  // Variantes de animação para o formulário
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  // Variantes para os itens (campos de input)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    // Div principal com o fundo e padrão aplicados AQUI
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      {/* Camada para a imagem de fundo que não se move com o scroll */}
      {/* Usando o caminho public/images/square.png. Ajuste a opacidade como preferir (ex: 5 para muito sutil, 10 para um pouco mais visível) */}
      <div className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40" style={{ backgroundAttachment: 'fixed' }}></div>

      {/* Conteúdo principal da página sobre a camada de fundo */}
      <div className="relative z-10">
        <Head>
          <title>Gabriel | Contato - Desenvolvedor</title>
          <meta name="description" content="Entre em contato com Gabriel para projetos, dúvidas ou oportunidades." />
        </Head>

        <Navbar />

        <main className="container mx-auto px-6 py-12">
          {/* Título da Página */}
          <motion.section
            className="mb-16 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-heading text-text-light font-bold leading-tight">Entre em Contato</h1>
            <p className="text-xl text-text-muted mt-4">Envie uma mensagem e vamos conversar.</p>
          </motion.section>

          {/* Formulário de Contato */}
          <motion.section
            className="max-w-xl mx-auto bg-dark-lighter p-8 rounded-xl shadow-lg border border-dark"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-heading text-text-light mb-6 text-center">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-text-light text-lg font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark border border-dark-lighter rounded-lg text-text-light focus:outline-none focus:border-accent"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-text-light text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark border border-dark-lighter rounded-lg text-text-light focus:outline-none focus:border-accent"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-text-light text-lg font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 bg-dark border border-dark-lighter rounded-lg text-text-light focus:outline-none focus:border-accent resize-y"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                variants={itemVariants}
                className="w-full bg-accent text-dark px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-colors duration-300 transform hover:scale-105 text-lg font-medium"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.section>
        </main>

        <Footer />
      </div> {/* Fim do z-10 div */}
    </div> // Fim do div principal
  );
}