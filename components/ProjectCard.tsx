// src/components/ProjectCard.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-dark-lighter p-6 rounded-xl shadow-lg border border-dark flex flex-col h-full"
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 border border-dark-lighter">
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-3xl font-heading text-accent mb-4">{project.title}</h3>
      <p className="text-text-muted mb-4 flex-grow">{project.description}</p>
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
          onClick={() => onSelect(project)}
          className="flex-grow bg-accent text-dark px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-colors duration-300 transform hover:scale-105"
        >
          Detalhes
        </button>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow bg-accent text-dark px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-colors duration-300 transform hover:scale-105"
        >
          Ver no GitHub
        </a>
      </div>
    </motion.div>
  );
}
