import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { usePhysics } from './PhysicsEngine';

const PhysicsElement = ({ children, className, style }) => {
    const { engine, isStabilized } = usePhysics();
    const elementRef = useRef(null);
    const bodyRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current || !engine) return;

        // Get current position in viewport
        const rect = elementRef.current.getBoundingClientRect();
        const { width, height } = rect;
        const x = rect.left + width / 2;
        const y = rect.top + height / 2;

        // Create a body for this element
        const body = Matter.Bodies.rectangle(
            x,
            y,
            width,
            height,
            {
                restitution: 0.6,
                friction: 0.1,
                render: { visible: false }
            }
        );

        bodyRef.current = body;
        Matter.World.add(engine.world, body);

        // Initial random velocity to simulate falling/explosion
        Matter.Body.setVelocity(body, {
            x: (Math.random() - 0.5) * 10,
            y: (Math.random() - 0.5) * 10
        });

        const update = () => {
            if (elementRef.current && bodyRef.current) {
                if (!isStabilized) {
                    const { x, y } = bodyRef.current.position;
                    const { angle } = bodyRef.current;
                    elementRef.current.style.transform = `translate(${x - width / 2}px, ${y - height / 2}px) rotate(${angle}rad)`;
                    elementRef.current.style.position = 'fixed';
                    elementRef.current.style.top = '0';
                    elementRef.current.style.left = '0';
                    elementRef.current.style.zIndex = '100';
                    elementRef.current.style.pointerEvents = 'auto';
                } else {
                    // Smoothly transition back to original layout
                    elementRef.current.style.transform = 'none';
                    elementRef.current.style.position = 'relative';
                    elementRef.current.style.top = 'auto';
                    elementRef.current.style.left = 'auto';
                    elementRef.current.style.zIndex = '1';
                }
            }
            requestAnimationFrame(update);
        };

        const animId = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animId);
            if (bodyRef.current && engine) {
                Matter.World.remove(engine.world, bodyRef.current);
            }
        };
    }, [engine, isStabilized]);

    return (
        <div ref={elementRef} className={className} style={{ ...style, transition: isStabilized ? 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none' }}>
            {children}
        </div>
    );
};

export default PhysicsElement;
