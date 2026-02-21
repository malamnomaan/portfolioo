import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const experiences = [
    {
        title: "Senior Software Developer",
        company: "PurpleDrone SupplyChain Solutions",
        location: "Noida / Remote",
        period: "July 2022 – Present",
        responsibilities: [
            "Built scalable backend systems using Django and FastAPI",
            "Designed REST APIs for high-throughput logistics integrations",
            "Integrated 3PL services including Delhivery, BlueDart, and ShadowFax",
            "Implemented business logic for supply chain optimization",
            "Lead developer for enterprise-level client integrations",
            "Optimized system reliability through rigorous testing and QA coordination"
        ],
        icon: <FiBriefcase />
    },
    {
        title: "Software Engineer",
        company: "BrainDooS Solutions Pvt Ltd",
        location: "Noida/Gurugram",
        period: "Sep 2020 – Jul 2022",
        responsibilities: [
            "Developed responsive UIs with modern JS frameworks and Bootstrap",
            "Architected backend modules using Django and Flask",
            "Optimized MySQL queries reducing latency by 40%",
            "Implemented reusable middleware and authentication modules",
            "Ensured 95%+ test coverage for core business logic"
        ],
        icon: <FiBriefcase />
    }
];

const Experience = () => {
    return (
        <div className="container py-5 min-vh-100 pt-5 mt-5 mt-md-0">
            <div className="text-center mb-5">
                <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ backgroundColor: 'rgba(184, 134, 11, 0.05)', color: 'var(--primary-gold)', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                    PROFESSIONAL JOURNEY
                </div>
                <h2 className="display-4 fw-bold">Career <span className="luxury-heading" style={{ color: 'var(--primary-gold)' }}>Timeline</span></h2>
            </div>

            <div className="position-relative mx-auto" style={{ maxWidth: '900px' }}>
                {/* Modern Vertical Line */}
                <div
                    className="position-absolute h-100 d-none d-md-block"
                    style={{ width: '2px', backgroundColor: 'rgba(184, 134, 11, 0.1)', left: '50%', transform: 'translateX(-50%)' }}
                />

                {experiences.map((exp, index) => (
                    <div key={index} className="row mb-5 pb-4 align-items-start g-0">
                        {/* Left Content / Connector */}
                        <div className={`col-md-5 ${index % 2 === 0 ? 'order-md-1 text-md-end pr-md-5' : 'order-md-2 pl-md-5'}`}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="card-luxury p-4 shadow-sm border-0"
                            >
                                <div className="d-flex align-items-center gap-2 mb-2 justify-content-md-start" style={{ color: 'var(--primary-gold)' }}>
                                    <FiCalendar /> <span className="small fw-bold">{exp.period}</span>
                                </div>
                                <h3 className="h4 fw-bold mb-1">{exp.title}</h3>
                                <div className="d-flex align-items-center gap-2 mb-3 text-muted small justify-content-md-start">
                                    <span className="fw-semibold" style={{ color: 'var(--text-dark)' }}>{exp.company}</span>
                                    <span>•</span>
                                    <FiMapPin /> {exp.location}
                                </div>
                                <ul className={`list-unstyled small mb-0 p-0 ${index % 2 === 0 ? 'text-md-end' : 'text-md-start'}`}>
                                    {exp.responsibilities.map((res, i) => (
                                        <li key={i} className="mb-2 d-flex gap-2 align-items-start justify-content-md-start">
                                            <FiCheckCircle size={14} className="mt-1 flex-shrink-0" style={{ color: 'var(--primary-gold)' }} />
                                            <span className="opacity-75">{res}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Center Circle */}
                        <div className="col-md-2 d-none d-md-flex justify-content-center pt-4 position-relative z-1">
                            <motion.div
                                className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                style={{ width: '40px', height: '40px', backgroundColor: 'white', border: '2px solid var(--primary-gold)' }}
                                initial={{ scale: 0, rotate: -45 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div style={{ color: 'var(--primary-gold)' }}>{exp.icon}</div>
                            </motion.div>
                        </div>

                        {/* Empty space for alternating layout */}
                        <div className={`col-md-5 d-none d-md-block ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
