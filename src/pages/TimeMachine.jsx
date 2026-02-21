import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiShare2, FiZap, FiActivity } from 'react-icons/fi';

const timelineData = {
    "2016": {
        text: "Education Begins. Started the journey into the world of computing and logical systems.",
        icon: <FiZap />
    },
    "2020": {
        text: "First Professional Role. Joined BrainDooS Solutions. Architected core modules using Django & Flask with focus on test-driven architecture.",
        icon: <FiShare2 />
    },
    "2022": {
        text: "Senior Growth Phase. Promoted to Senior role at PurpleDrone. Specialized in logistics integrations and enterprise-scale backend scaling.",
        icon: <FiActivity />
    },
    "2023": {
        text: "AI & RAG Innovation. Developed FZ-GPT document intelligence system. Pioneered prompt engineering and vector storage integration.",
        icon: <FiClock />
    },
    "2024": {
        text: "System Architecture. Expanding into autonomous AI agents and advanced cloud-native architectures for supply chain reliability.",
        icon: <FiZap />
    }
};

const years = Object.keys(timelineData);

const TimeMachine = () => {
    const [selectedIndex, setSelectedIndex] = useState(years.indexOf("2024"));
    const [isWarping, setIsWarping] = useState(false);

    const handleYearClick = (index) => {
        if (index === selectedIndex) return;
        setIsWarping(true);
        setTimeout(() => {
            setSelectedIndex(index);
            setIsWarping(false);
        }, 500);
    };

    const currentYear = years[selectedIndex];
    const data = timelineData[currentYear];

    return (
        <div className="container py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center overflow-hidden pt-5">
            <div className="text-center mb-5">
                <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ backgroundColor: 'rgba(184, 134, 11, 0.05)', color: 'var(--primary-gold)', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                    TEMPORAL ACCESS
                </div>
                <h2 className="display-4 fw-bold">The <span className="luxury-heading" style={{ color: 'var(--primary-gold)' }}>Vault</span></h2>
            </div>

            <div className="position-relative d-flex align-items-center justify-content-center" style={{ height: '400px', width: '100%' }}>
                {/* Warp Effect Overlay */}
                <AnimatePresence mode="wait">
                    {isWarping && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 15 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="position-absolute rounded-circle"
                            style={{ width: '50px', height: '50px', background: 'radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)', zIndex: 10, pointerEvents: 'none' }}
                        />
                    )}
                </AnimatePresence>

                {/* Modern Dial Container */}
                <div className="position-relative" style={{ width: '320px', height: '320px', perspective: '1500px' }}>
                    <motion.div
                        className="w-100 h-100 rounded-circle border border-2 d-flex align-items-center justify-content-center shadow-lg"
                        style={{
                            borderColor: 'rgba(184, 134, 11, 0.3)',
                            background: 'white',
                            boxShadow: '0 20px 60px rgba(184, 134, 11, 0.1)'
                        }}
                        animate={{ rotate: selectedIndex * -(360 / years.length) }}
                        transition={{ type: "spring", stiffness: 40, damping: 15 }}
                    >
                        <div className="text-center">
                            <motion.div
                                key={currentYear}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="display-2 fw-bold"
                                style={{ color: 'var(--primary-gold)', letterSpacing: '-0.05em' }}
                            >
                                {currentYear}
                            </motion.div>
                        </div>

                        {/* Dial Dots */}
                        {[...Array(24)].map((_, i) => (
                            <div
                                key={i}
                                className="position-absolute"
                                style={{
                                    height: '4px',
                                    width: '4px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(184, 134, 11, 0.2)',
                                    top: '12px',
                                    left: '50%',
                                    transform: `translateX(-50%) rotate(${i * 15}deg)`,
                                    transformOrigin: '0 148px'
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Satellite Years */}
                    {years.map((year, i) => {
                        const isActive = i === selectedIndex;
                        return (
                            <motion.button
                                key={year}
                                className="position-absolute btn p-0 border-0 fw-bold"
                                style={{
                                    width: '60px',
                                    color: isActive ? 'var(--primary-gold)' : 'rgba(0, 0, 0, 0.2)',
                                    left: '50%',
                                    top: '50%',
                                    transformOrigin: '0 200px',
                                    background: 'transparent',
                                    fontSize: '1rem'
                                }}
                                animate={{
                                    rotate: (i - selectedIndex) * (360 / years.length),
                                    y: -200,
                                    x: -30,
                                    scale: isActive ? 1.4 : 0.9
                                }}
                                onClick={() => handleYearClick(i)}
                            >
                                {year}
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            <div className="mt-5 text-center px-3" style={{ maxWidth: '700px', minHeight: '150px' }}>
                <AnimatePresence mode="wait">
                    {!isWarping && (
                        <motion.div
                            key={currentYear}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="card-luxury p-5 border-0 shadow-sm"
                        >
                            <div className="mb-3" style={{ color: 'var(--primary-gold)' }}>
                                {React.cloneElement(data.icon, { size: 28 })}
                            </div>
                            <p className="mb-0 fs-5 text-muted lh-lg">{data.text}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TimeMachine;
