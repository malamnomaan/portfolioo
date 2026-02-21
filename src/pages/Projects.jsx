import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLayers, FiCpu, FiCode } from 'react-icons/fi';

const projects = [
    {
        title: "FZ-GPT Intelligence",
        role: "Lead Developer",
        icon: <FiCpu />,
        tech: ["Django REST", "LangChain", "RAG", "Weaviate", "FAISS", "OpenAI", "AWS S3"],
        description: "Architected a full-scale RAG-based document intelligence platform. Implemented advanced data ingestion pipelines and context-aware embeddings for high-precision information retrieval."
    },
    {
        title: "Fulfilzy Aggregator",
        role: "Backend Lead",
        icon: <FiLayers />,
        tech: ["Django REST", "MySQL", "Angular", "LLM", "LangChain"],
        description: "Unified 15+ logistics partners into a single API ecosystem. Optimized database performance for millions of tracking updates and handled automated NDR reconciliation."
    },
    {
        title: "Cuberoote Logistics",
        role: "Lead System Developer",
        icon: <FiCode />,
        tech: ["Django", "MySQL", "Bootstrap", "jQuery"],
        description: "Developed a core logistics platform for forward and reverse supply chains. Focused on high-availability backend services for mobile client consumption."
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-5" style={{ perspective: '1200px', minHeight: '450px' }}>
            <motion.div
                className="w-100 h-100 position-relative"
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div
                    className="w-100 h-100 card-luxury p-5 d-flex flex-column shadow-sm border-0"
                    style={{ backgroundColor: 'white' }}
                >
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="p-3 rounded-circle" style={{ backgroundColor: 'rgba(184, 134, 11, 0.05)', color: 'var(--primary-gold)' }}>
                            {project.icon}
                        </div>
                        <div className="d-flex gap-2">
                            <FiGithub className="text-muted" style={{ cursor: 'pointer' }} />
                            <FiExternalLink className="text-muted" style={{ cursor: 'pointer' }} />
                        </div>
                    </div>

                    <h3 className="h4 fw-bold mb-2">{project.title}</h3>
                    <div className="small text-uppercase fw-bold mb-3" style={{ color: 'var(--primary-gold)', letterSpacing: '0.1em' }}>{project.role}</div>

                    <p className="text-muted small lh-lg flex-grow-1" style={{ fontSize: '0.95rem' }}>{project.description}</p>

                    <div className="mt-4 pt-3 border-top border-light">
                        <div className="d-flex flex-wrap gap-2">
                            {project.tech.slice(0, 5).map((t, i) => (
                                <span key={i} className="badge rounded-pill fw-medium" style={{ backgroundColor: 'rgba(0,0,0,0.03)', color: 'var(--text-dark)', padding: '6px 12px' }}>{t}</span>
                            ))}
                            {project.tech.length > 5 && <span className="small text-muted align-self-center">+{project.tech.length - 5} more</span>}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="container py-5 min-vh-100 pt-5 mt-5 mt-md-0">
            <div className="text-center mb-5">
                <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ backgroundColor: 'rgba(184, 134, 11, 0.05)', color: 'var(--primary-gold)', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                    ENGINEERING SHOWCASE
                </div>
                <h2 className="display-4 fw-bold">Recent <span className="luxury-heading" style={{ color: 'var(--primary-gold)' }}>Ventures</span></h2>
            </div>

            <div className="row g-4 justify-content-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
