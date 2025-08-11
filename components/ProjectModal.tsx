// src/components/ProjectModal.tsx
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Project } from "@/data/projects";
import remarkGfm from "remark-gfm";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50"
      style={{ backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(4px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div
        className="bg-dark-lighter rounded-xl max-w-4xl w-full p-8 border-2 border-accent max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-heading text-text-light mb-2">
          {project.title}
        </h2>
        <p className="text-text-muted italic mb-6">{project.context}</p>

        <div className="prose dark:prose-invert max-w-none prose-li:marker:text-accent prose-h2:text-text-light prose-strong:text-text-light">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.fullDescription}
          </ReactMarkdown>
        </div>

        <h3 className="text-xl font-heading font-semibold text-text-light mb-2">
          Tecnologias
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-dark text-text-muted text-sm px-3 py-1 rounded-full border border-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-dark px-6 py-3 rounded-lg shadow-md hover:bg-accent-dark transition-colors duration-300 transform hover:scale-105 w-full"
        >
          Ver no GitHub
        </a>
      </div>
    </motion.div>
  );
}
