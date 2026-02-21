import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiCpu, FiCloud, FiCode, FiZap, FiActivity } from 'react-icons/fi';

const skillsData = [
    {
        category: "Backend Engine",
        icon: <FiDatabase />,
        items: ["Python", "Django", "FastAPI", "MySQL", "PostgreSQL", "AsyncIO", "Redis"]
    },
    {
        category: "AI & Intelligence",
        icon: <FiCpu />,
        items: ["LangChain", "RAG Architecture", "Vector DBs (FAISS, Weaviate)", "Prompt Engineering", "Semantic Search"]
    },
    {
        category: "Infrastructure",
        icon: <FiCloud />,
        items: ["AWS Ecosystem", "Docker", "Git Architecture", "CI/CD", "n8n Automation", "System Monitoring"]
    }
];

const SkillGroup = ({ category, icon, items, delay }) => (
    <motion.div
        className="col-lg-4 col-md-6 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
    >
        <div className="card-luxury p-5 h-100 shadow-sm border-0 d-flex flex-column align-items-center text-center">
            <div className="p-4 rounded-circle mb-4" style={{ backgroundColor: 'white', border: '1px solid rgba(184, 134, 11, 0.1)', color: 'var(--primary-gold)', boxShadow: '0 10px 20px rgba(184, 134, 11, 0.05)' }}>
                {React.cloneElement(icon, { size: 32 })}
            </div>
            <h3 className="h4 fw-bold mb-4">{category}</h3>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
                {items.map((item, i) => (
                    <motion.span
                        key={i}
                        className="px-3 py-2 rounded-pill small fw-semibold"
                        style={{ backgroundColor: 'rgba(184, 134, 11, 0.05)', color: 'var(--primary-gold)', border: '1px solid rgba(184, 134, 11, 0.05)' }}
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-gold)', color: 'white' }}
                    >
                        {item}
                    </motion.span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <div className="container py-5 min-vh-100 pt-5 mt-5 mt-md-0">
            <div className="text-center mb-5 pb-3">
                <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ backgroundColor: 'rgba(184, 134, 11, 0.05)', color: 'var(--primary-gold)', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                    TECHNICAL STACK
                </div>
                <h2 className="display-4 fw-bold">System <span className="luxury-heading" style={{ color: 'var(--primary-gold)' }}>Mastery</span></h2>
            </div>

            <div className="row justify-content-center g-4">
                {skillsData.map((data, index) => (
                    <SkillGroup key={index} {...data} delay={index * 0.2} />
                ))}
            </div>

            <motion.div
                className="mt-5 p-5 text-center card-luxury border-0 shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <h4 className="fw-bold mb-3 d-flex align-items-center justify-content-center gap-2">
                    <FiZap style={{ color: 'var(--primary-gold)' }} />
                    Architecture Philosophy
                </h4>
                <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                    I believe in building systems that aren't just functional but elegant. My methodology focuses on
                    <span className="fw-bold" style={{ color: 'var(--text-dark)' }}> decoupling components</span>, ensuring
                    <span className="fw-bold" style={{ color: 'var(--text-dark)' }}> rigorous scalability</span>, and integrating
                    <span className="fw-bold" style={{ color: 'var(--text-dark)' }}> AI natively</span> into the backend flow.
                </p>
            </motion.div>
        </div>
    );
};

export default Skills;
