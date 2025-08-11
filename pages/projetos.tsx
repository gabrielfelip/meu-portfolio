// pages/projetos.tsx
import Head from "next/head";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { allProjects, Project } from "@/data/projects";

// Lista fixa de linguagens principais que aparecem no filtro de tecnologias
const allowedLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Node.js",
  "SQL",
  "HTML",
  "CSS",
];

// Lista fixa de categorias válidas para filtro
const allowedCategories = [
  "FullStack",
  "Frontend",
  "Backend",
  "IA",
  "Automação",
  "Web Scraping",  
];

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Tecnologias únicas filtradas pela lista fixa allowedLanguages e presentes nos projetos
  const allTechs = useMemo(() => {
    const techsFromProjects = allProjects.flatMap((p) => p.technologies);
    return allowedLanguages.filter((lang) => techsFromProjects.includes(lang));
  }, []);

  // Categorias únicas filtradas por allowedCategories
  // Se não selecionar tecnologia, mostra todas as categorias válidas encontradas
  // Se selecionar tecnologia, mostra categorias válidas dos projetos que têm a tecnologia
  const categoriesForTech = useMemo(() => {
    let cats: string[] = [];

    if (!selectedTech) {
      cats = allProjects.flatMap((p) => p.category);
    } else {
      cats = allProjects
        .filter((p) => p.technologies.includes(selectedTech))
        .flatMap((p) => p.category);
    }

    // Filtra só as categorias permitidas e únicas
    const filteredCats = Array.from(new Set(cats)).filter((cat) =>
      allowedCategories.includes(cat)
    );

    return filteredCats;
  }, [selectedTech]);

  // Filtragem dos projetos com base nos filtros e categorias permitidas
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchTech = selectedTech ? p.technologies.includes(selectedTech) : true;

      // Para a categoria, validamos que pelo menos uma está nas permitidas e que o filtro bate
      const categoryValid = Array.isArray(p.category)
        ? p.category.some((cat) => allowedCategories.includes(cat))
        : allowedCategories.includes(p.category);
      const matchCategory = selectedCategory
        ? Array.isArray(p.category)
          ? p.category.includes(selectedCategory)
          : p.category === selectedCategory
        : true;

      return matchTech && matchCategory && categoryValid;
    });
  }, [selectedTech, selectedCategory]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-dark text-text-light font-body relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[url('/images/darkness.png')] bg-repeat opacity-40"
        style={{ backgroundAttachment: "fixed" }}
      ></div>

      <div className="relative z-10">
        <Head>
          <title>Gabriel | Projetos - Desenvolvedor</title>
          <meta name="description" content="Explore os projetos desenvolvidos por Gabriel." />
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Meus Projetos</h1>
            <p className="text-xl text-text-muted mt-4">Uma seleção dos meus trabalhos e paixões.</p>
          </motion.section>

          {/* Filtros */}
          <motion.section
            className="mb-12 flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <select
              value={selectedTech}
              onChange={(e) => {
                setSelectedTech(e.target.value);
                setSelectedCategory("");
              }}
              className="bg-dark-lighter text-text-light rounded-lg px-4 py-2 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Todas as Tecnologias</option>
              {allTechs.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              // Sempre habilitado
              className="bg-dark-lighter text-text-light rounded-lg px-4 py-2 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Todas as Categorias</option>
              {categoriesForTech.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </motion.section>

          {/* Grid de projetos */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </motion.div>
        </main>

        <Footer />
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
