import { motion } from "framer-motion";

interface EnhancedGraphicsProps {
  variant?: "particles" | "geometric" | "lines" | "all";
  intensity?: "low" | "medium" | "high";
}

export function EnhancedGraphics({ variant = "all", intensity = "medium" }: EnhancedGraphicsProps) {
  const particleCount = intensity === "low" ? 15 : intensity === "medium" ? 30 : 50;
  const geometricCount = intensity === "low" ? 3 : intensity === "medium" ? 6 : 10;
  const lineCount = intensity === "low" ? 4 : intensity === "medium" ? 8 : 12;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Particles */}
      {(variant === "particles" || variant === "all") && (
        <>
          {[...Array(particleCount)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDelay = Math.random() * 3;
            const randomDuration = Math.random() * 4 + 3;
            const particleSize = Math.random() * 4 + 1;
            const colors = ['cyan-400', 'blue-400', 'teal-400', 'indigo-400'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            return (
              <motion.div
                key={`particle-${i}`}
                className={`absolute bg-${color}/60 rounded-full blur-sm`}
                style={{
                  width: `${particleSize}px`,
                  height: `${particleSize}px`,
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                  boxShadow: `0 0 ${particleSize * 3}px rgba(34, 193, 255, 0.6)`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  y: [0, -250, -500],
                  x: [0, Math.random() * 150 - 75, Math.random() * 150 - 75],
                  opacity: [0, 1, 0.9, 0],
                  scale: [0, 1.8, 2.5, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </>
      )}

      {/* Geometric Shapes */}
      {(variant === "geometric" || variant === "all") && (
        <>
          {[...Array(geometricCount)].map((_, i) => {
            const shapes = ['circle', 'square', 'triangle', 'hexagon'];
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const size = Math.random() * 80 + 30;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            return (
              <motion.div
                key={`shape-${i}`}
                className="absolute border-2 border-cyan-500/15"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${x}%`,
                  top: `${y}%`,
                  borderRadius: shape === 'circle' ? '50%' : shape === 'hexagon' ? '20%' : '12px',
                  clipPath: shape === 'triangle' 
                    ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
                    : shape === 'hexagon'
                    ? 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                    : 'none',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                  opacity: [0.08, 0.25, 0.08],
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                }}
                transition={{
                  duration: 12 + Math.random() * 15,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </>
      )}

      {/* Animated Connecting Lines */}
      {(variant === "lines" || variant === "all") && (
        <>
          {[...Array(lineCount)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;
            
            return (
              <motion.svg
                key={`line-${i}`}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.12 }}
              >
                <motion.line
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke="rgba(34, 193, 255, 0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            );
          })}
        </>
      )}

      {/* Pulsing Orbs */}
      {variant === "all" && (
        <>
          {[...Array(4)].map((_, i) => {
            const positions = [
              { x: -10, y: -10 },
              { x: 110, y: -10 },
              { x: -10, y: 110 },
              { x: 110, y: 110 },
            ];
            const pos = positions[i];
            
            return (
              <motion.div
                key={`orb-${i}`}
                className="absolute w-64 h-64 rounded-full blur-3xl"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  background: i % 2 === 0 
                    ? 'radial-gradient(circle, rgba(34, 193, 255, 0.15), transparent)'
                    : 'radial-gradient(circle, rgba(30, 99, 233, 0.12), transparent)',
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

