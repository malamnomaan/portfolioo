import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiDatabase, FiCpu, FiLayers, FiActivity } from 'react-icons/fi';
import PhysicsElement from '../physics/PhysicsElement';

const roles = [
    { text: "Backend Architect", icon: <FiLayers /> },
    { text: "AI Systems Engineer", icon: <FiCpu /> },
    { text: "RAG Developer", icon: <FiActivity /> },
    { text: "System Thinker", icon: <FiDatabase /> }
];

const Home = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-4 overflow-hidden pt-5">
            <PhysicsElement>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                    className="p-4"
                >
                    <div className="mb-3 d-inline-block px-3 py-1 rounded-pill border border-gold" style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--primary-gold)', fontWeight: '600', backgroundColor: 'rgba(184, 134, 11, 0.05)' }}>
                        SENIOR SOFTWARE DEVELOPER
                    </div>

                    <h1 className="display-1 fw-bold mb-2" style={{ letterSpacing: '-0.03em', fontSize: 'calc(2rem + 4vw)' }}>
                        Nomaan <span className="luxury-heading" style={{ color: 'var(--primary-gold)' }}>Alam</span>
                    </h1>

                    <div className="role-container mb-4 mt-2" style={{ height: '50px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={roles[roleIndex].text}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="h4 d-flex align-items-center justify-content-center gap-2"
                                style={{ color: 'var(--text-dark)', fontWeight: '500' }}
                            >
                                <span style={{ color: 'var(--primary-gold)' }}>{roles[roleIndex].icon}</span>
                                {roles[roleIndex].text}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.p
                        className="lead mb-5 mx-auto text-muted"
                        style={{ maxWidth: '650px', fontSize: '1.25rem', fontWeight: '400', lineHeight: '1.6' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Engineering <span className="fw-bold" style={{ color: 'var(--text-dark)' }}>Scalable Systems</span> that evolve with the complexity of time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="d-flex gap-3 justify-content-center"
                    >
                        <button className="btn btn-gold d-flex align-items-center gap-2">
                            Enter Temporal Vault <FiArrowRight />
                        </button>
                        <button className="btn btn-outline-gold">
                            View Projects
                        </button>
                    </motion.div>
                </motion.div>
            </PhysicsElement>

            <PhysicsElement className="mt-5 pt-4">
                <motion.div
                    className="text-start mx-auto p-4 card-luxury shadow-sm"
                    style={{ maxWidth: '850px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <div className="row align-items-center">
                        <div className="col-md-auto mb-3 mb-md-0 d-flex justify-content-center">
                            <div className="rounded-circle d-flex align-items-center justify-content-center shadow-inner" style={{ width: '80px', height: '80px', background: 'white', border: '1px solid rgba(184, 134, 11, 0.1)' }}>
                                <FiActivity size={32} color="var(--primary-gold)" />
                            </div>
                        </div>
                        <div className="col">
                            <p className="mb-0 fs-5 text-muted lh-base">
                                I am a results-driven backend engineer with 5+ years of experience in <span style={{ color: 'var(--primary-gold)', fontWeight: '600' }}>RAG systems</span>, intelligent data platforms, and scalable architectures. Specializing in Python, FastAPI, and Cloud integrations.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </PhysicsElement>
        </div>
    );
};

export default Home;
