// pages/tecnologias.tsx
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Definição das Categorias e Habilidades (Expansiva)
// Substitua e adicione todas as tecnologias que você domina, com seus ícones!
const allTechSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "/skills/html5.svg" },
      { name: "CSS", icon: "/skills/css3.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },

    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Java", icon: "/skills/java.svg" },
      { name: "Python", icon: "/skills/python.svg" },
      { name: "Flask", icon: "/skills/flask.svg" },
      { name: "Postman", icon: "/skills/postman.svg" },
    ],
  },
  {
    category: "Banco de Dados",
    skills: [
      { name: "MySQL", icon: "/skills/mysql.svg" },
      { name: "PostgreSQL", icon: "/skills/postgre.svg" },
      { name: "Prisma - ORM", icon: "/skills/prisma.svg" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Linux", icon: "/skills/linux.svg" },
      { name: "Vercel", icon: "/skills/vercel.svg" },
    ],
  },
  {
    category: "Ferramentas & Outros",
    skills: [
      { name: "Github", icon: "/skills/github.svg" },
      { name: "Git", icon: "/skills/git.svg" },
      { name: "Figma", icon: "/skills/figma.svg" },
      { name: "Jira", icon: "/skills/jira.svg" },
      { name: "Trello", icon: "/skills/trello.svg" },
      { name: "Selenium", icon: "/skills/selenium.svg" },
      { name: "Pandas", icon: "/skills/pandas.svg" },


    ],
  },
];

// Variantes de animação para as categorias de tecnologia
const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1, // Animação em cascata dos itens dentro da categoria
    },
  },
};

// Variantes para os cards de tecnologia individuais
const techCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Technologies() {
  return (
    // Div principal com o fundo e padrão aplicados AQUI
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      {/* Camada para a imagem de fundo que não se move com o scroll */}
      {/* Usando o caminho public/images/darkness.png e opacidade de 40% */}
      <div className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40" style={{ backgroundAttachment: 'fixed' }}></div>

      {/* Conteúdo principal da página sobre a camada de fundo */}
      <div className="relative z-10">
        <Head>
          <title>Gabriel | Tecnologias - Desenvolvedor</title>
          <meta name="description" content="Explore as tecnologias e ferramentas que Gabriel utiliza em seus projetos." />
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
            <h1 className="text-4xl md:text-5xl font-heading text-text-light font-bold leading-tight">Tecnologias Trabalhadas</h1>
            <p className="text-xl text-text-muted mt-4">Uma visão completa das minhas habilidades e ferramentas.</p>
          </motion.section>

          {/* Seção de Categorias de Tecnologia */}
          <section className="max-w-6xl mx-auto space-y-12">
            {allTechSkills.map((categoryData, index) => (
              <motion.div
                key={categoryData.category}
                variants={categoryVariants}
                initial="hidden"
                animate="visible"
                transition={{ ...categoryVariants.visible.transition, delay: 0.2 * index }}
                className="bg-dark-lighter p-8 rounded-xl shadow-lg border border-dark"
              >
                <h3 className="text-2xl font-heading text-text-light mb-6 border-b-2 border-accent-dark pb-3">
                  {categoryData.category}
                </h3>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6"
                  variants={categoryVariants}
                >
                  {categoryData.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={techCardVariants}
                      className="bg-dark p-4 rounded-lg shadow-sm flex flex-col items-center justify-center
                                 hover:bg-accent-dark transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-xl" // Adicionado hover effects aqui
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
                </motion.div>
              </motion.div>
            ))}
          </section>
        </main>

        <Footer />
      </div> {/* Fim do z-10 div */}
    </div> // Fim do div principal
  );
}