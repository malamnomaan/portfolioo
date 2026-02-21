import React, { useEffect, useRef, createContext, useContext } from 'react';
import Matter from 'matter-js';

const PhysicsContext = createContext(null);

export const usePhysics = () => useContext(PhysicsContext);

const PhysicsEngine = ({ children, isStabilized }) => {
  const containerRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());

  useEffect(() => {
    if (!containerRef.current) return;

    const engine = engineRef.current;
    const render = Matter.Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 50,
      window.innerWidth,
      100,
      { isStatic: true }
    );
    const wallLeft = Matter.Bodies.rectangle(
      -50,
      window.innerHeight / 2,
      100,
      window.innerHeight,
      { isStatic: true }
    );
    const wallRight = Matter.Bodies.rectangle(
      window.innerWidth + 50,
      window.innerHeight / 2,
      100,
      window.innerHeight,
      { isStatic: true }
    );

    Matter.World.add(engine.world, [ground, wallLeft, wallRight]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight + 50 });
      Matter.Body.setPosition(wallRight, { x: window.innerWidth + 50, y: window.innerHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  useEffect(() => {
    const engine = engineRef.current;
    if (isStabilized) {
      engine.gravity.y = 0;
    } else {
      engine.gravity.y = 1;
    }
  }, [isStabilized]);

  return (
    <PhysicsContext.Provider value={{ engine: engineRef.current, isStabilized }}>
      <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
        <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
          {children}
        </div>
      </div>
    </PhysicsContext.Provider>
  );
};

export default PhysicsEngine;
