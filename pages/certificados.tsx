// pages/certificados.tsx
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Dados de Exemplo de Certificados
const allCertificates = [
  {
    id: 1,
    name: "Machine Learning Foundations",
    institution: "Udacity",
    year: "2025",
    image: "/certificates/machine-learning.PNG", 
    pdf: "/certificates/machine-learning.pdf",
    //credentialUrl: "https://www.coursera.org/verify/YOUR_CREDENTIAL_ID_1",  
  },
  {
    id: 2,
    name: "Introducing Generative AI with AWS",
    institution: "Udacity",
    year: "2025",
    image: "/certificates/generative-AI.PNG", 
    pdf: "/certificates/generative-AI.pdf",
    credentialUrl: "https://www.udacity.com/certificate/e/d85c349e-3d8c-11f0-8ddb-7f389963cdb2", 
  },
  {
    id: 3,
    name: "Introdução a Cloud Computing",
    institution: "Ada Tech",
    year: "2025",
    image: "/certificates/cloud-computing.PNG", 
    credentialUrl: "https://ada.tech/certificado?code=f9c6d76c-f979-85b6-5269-a8ddf697adff", 
  },
  {
    id: 4,
    name: "DevOps | Básico",
    institution: "Ada Tech",
    year: "2025",
    image: "/certificates/devops.PNG", 
    credentialUrl: "https://ada.tech/certificado?code=581ca5e3-d820-8616-45f9-9889275dde25", 
  },
  {
    id: 5,
    name: "NLW Agents - Avançado",
    institution: "Rocketseat",
    year: "2025",
    image: "/certificates/fullstack.PNG", 
    credentialUrl: "https://app.rocketseat.com.br/certificates/34590851-79a7-4d10-b6cf-e935786dfcdb", 
  },
  {
    id: 6,
    name: "Fundamentos do Suporte Técnico",
    institution: "Coursera + Google",
    year: "2024",
    image: "/certificates/fundamentos.PNG", 
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/CDJRXJDQN2GV", 
  },
  {
    id: 7,
    name: "Fundamentos de TI: Hardware e Software",
    institution: "Fundação Bradesco",
    year: "2025",
    image: "/certificates/hardware-e-software.PNG", 
    //credentialUrl: "https://ada.tech/certificado?code=f9c6d76c-f979-85b6-5269-a8ddf697adff", 
  },
  {
    id: 8,
    name: "Internet Of Things",
    institution: "Cisco",
    year: "2025",
    image: "/certificates/IOT.PNG", 
    //credentialUrl: "https://ada.tech/certificado?code=f9c6d76c-f979-85b6-5269-a8ddf697adff", 
  },
  {
    id: 9,
    name: "Sistema Operacional Linux",
    institution: "Ada Tech",
    year: "2025",
    image: "/certificates/linux.PNG",
    credentialUrl: "https://ada.tech/certificado?code=de4c53f1-9249-a983-c0b0-1408e863a0cd",
  },
  {
    id: 10,
    name: "Redes e Sistemas",
    institution: "Ada Tech",
    year: "2025",
    image: "/certificates/cloud-computing.PNG", 
    credentialUrl: "https://ada.tech/certificado?code=2fff79ca-6b93-8d86-6c1a-bc7d48957ca9", 
  },
];

// Variantes de animação para os cards de certificado
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

export default function Certificates() {
  return (
    // Div principal com o fundo e padrão aplicados AQUI
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      {/* Camada para a imagem de fundo que não se move com o scroll */}
      {/* O caminho é public/images/square.png. Ajuste a opacidade como preferir (ex: 5 para muito sutil, 10 para um pouco mais visível) */}
      <div className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40" style={{ backgroundAttachment: 'fixed' }}></div>

      {/* Conteúdo principal da página sobre a camada de fundo */}
      <div className="relative z-10">
        <Head>
          <title>Gabriel | Certificados - Desenvolvedor</title>
          <meta name="description" content="Explore os certificados e formações de Gabriel." />
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
            <h1 className="text-4xl md:text-5xl font-heading text-text-light font-bold leading-tight">Meus Certificados</h1>
            <p className="text-xl text-text-muted mt-4">Conquistas que atestam meu conhecimento e dedicação.</p>
          </motion.section>

          {/* Grid de Certificados */}
          <section>
            {allCertificates.length === 0 ? (
              <motion.p
                key="no-certs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-text-muted text-lg mt-8"
              >
                Nenhum certificado adicionado ainda.
              </motion.p>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {allCertificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-dark-lighter p-6 rounded-xl shadow-lg border border-dark flex flex-col h-full"
                  >
                    {cert.image && (
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                          src={cert.image}
                          alt={cert.institution + " Logo"}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-medium text-accent mb-2 text-center">{cert.name}</h3>
                    <p className="text-text-muted text-center mb-1">{cert.institution}</p>
                    <p className="text-text-muted text-center mb-4">{cert.year}</p>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto bg-accent text-dark px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-colors duration-300 transform hover:scale-105 text-center font-medium"
                    >
                      Ver Credencial
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