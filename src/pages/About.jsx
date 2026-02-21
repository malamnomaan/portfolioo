import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiSettings, FiGrid, FiBarChart2 } from 'react-icons/fi';
import PhysicsElement from '../physics/PhysicsElement';

const Highlight = ({ children }) => (
    <span className="position-relative d-inline-block">
        <span className="position-relative z-1 fw-bold" style={{ color: 'var(--primary-gold)' }}>{children}</span>
        <motion.span
            className="position-absolute bottom-0 start-0 w-100"
            style={{ height: '8px', backgroundColor: 'rgba(184, 134, 11, 0.1)', zIndex: 0, borderRadius: '4px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
        />
    </span>
);

const ExpertiseCard = ({ icon, title, description, delay }) => (
    <motion.div
        className="col-md-6 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
    >
        <div className="p-4 card-luxury h-100 shadow-sm border-0 d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3">
                <div className="p-3 rounded-pill" style={{ backgroundColor: 'rgba(184, 134, 11, 0.05)', color: 'var(--primary-gold)' }}>
                    {icon}
                </div>
                <h3 className="h5 mb-0 fw-bold">{title}</h3>
            </div>
            <p className="small text-muted mb-0 lh-base">{description}</p>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <div className="container py-5 min-vh-100 d-flex align-items-center pt-5 mt-5 mt-md-0">
            <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-10">
                    <div className="row align-items-start g-5">
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--primary-gold)' }}></div>
                                    <span className="text-uppercase fw-bold" style={{ color: 'var(--primary-gold)', letterSpacing: '0.2em', fontSize: '0.75rem' }}>The Architect</span>
                                </div>
                                <h2 className="display-4 mb-4 fw-bold">About <span className="luxury-heading" style={{ color: 'var(--primary-gold)' }}>Me</span></h2>

                                <div className="fs-5 lh-lg text-muted" style={{ fontWeight: '400' }}>
                                    <p className="mb-4">
                                        I am a <Highlight>backend-focused engineer</Highlight> dedicated to designing clean,
                                        scalable, and high-performance systems that drive business growth.
                                    </p>

                                    <p className="mb-4">
                                        With over <Highlight>five years of experience</Highlight>, I have architected logic for
                                        global logistics platforms and AI-driven document intelligence. My approach is rooted in
                                        structured systems design and <Highlight>optimized performance</Highlight>.
                                    </p>

                                    <p className="mb-0">
                                        Currently at <Highlight>PurpleDrone</Highlight>, I integrate complex 3PL services
                                        ensuring zero-downtime and high data integrity for enterprise-level supply chains.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-4">
                                <ExpertiseCard
                                    icon={<FiTarget size={20} />}
                                    title="RAG Systems"
                                    description="Implementing advanced document intelligence with FAISS, Weaviate, and LangChain."
                                    delay={0.2}
                                />
                                <ExpertiseCard
                                    icon={<FiZap size={20} />}
                                    title="System Scaling"
                                    description="Designing architectures that handle millions of requests with Python and FastAPI."
                                    delay={0.3}
                                />
                                <ExpertiseCard
                                    icon={<FiSettings size={20} />}
                                    title="Automation"
                                    description="Leveraging n8n and AI to streamline complex business workflows and data pipelines."
                                    delay={0.4}
                                />
                                <ExpertiseCard
                                    icon={<FiBarChart2 size={20} />}
                                    title="Optimization"
                                    description="Deep database indexing and query optimization to ensure sub-second response times."
                                    delay={0.5}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
