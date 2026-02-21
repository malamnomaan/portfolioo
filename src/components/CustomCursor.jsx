import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHoverStart = (e) => {
            if (e.target.closest('a, button, .cursor-pointer')) {
                setIsHovered(true);
            }
        };

        const handleHoverEnd = () => {
            setIsHovered(false);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHoverStart);
        window.addEventListener('mouseout', handleHoverEnd);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHoverStart);
            window.removeEventListener('mouseout', handleHoverEnd);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: 'var(--metallic-gold)',
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    mixBlendMode: 'difference',
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    opacity: 1,
                }}
            />
            <motion.div
                className="cursor-glow"
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0) 70%)',
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                }}
            />
        </>
    );
};

export default CustomCursor;
